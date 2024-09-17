import { Request, Response } from "express";
import connectToCluster from "../connection/connect";
import { Collection, Db } from "mongodb";
import ConnectionRes from "../interface/ConnectionRes";
import { comparePassword, createSession } from "../functions/hash";
import { createBearer } from "../functions/bearer";
import User from "../interface/User";
import { UserClientStatusEnum } from "../enums/Status";
import { closeConn } from "../connection/closeConn";
import { stat } from "fs";

export async function login(req: Request, res: Response) {
  let user = req.query.user as string;
  let password = req.query.password as string;

  try {
    if (user === undefined) {
      return res.status(400).json({ message: "Username or email required" });
    }
    if (password === undefined) {
      return res.status(400).json({ message: "Password required" });
    }

    // create connection
    const connect: ConnectionRes = await connectToCluster();
    if (typeof connect.conn === "string") {
      return res.status(500).json(connect);
    }

    const conn = connect.conn;
    const db: Db = conn.db("client");
    const collection: Collection = db.collection("users");
    const sessionCollection: Collection = db.collection("sessions");

    // check if user exists
    let loggedUser;
    if (user) {
      loggedUser = await collection.findOne({ username: user });
    }
    if (loggedUser === null) {
      loggedUser = await collection.findOne({
        email: user,
      });
    }

    if (!loggedUser) {
      return res.status(400).json({ message: "User not found" });
    }
    // check if password is correct
    if (!comparePassword(password, loggedUser?.password)) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // check user status
    if (loggedUser?.status === UserClientStatusEnum.inactive) {
      return res.status(400).json({ message: "User is inactive" });
    }
    if (loggedUser?.status === UserClientStatusEnum.blocked) {
      return res.status(400).json({ message: "User is blocked" });
    }
    if (loggedUser?.status === UserClientStatusEnum.deleted) {
      return res.status(400).json({ message: "User is deleted" });
    }

    let newUser: User = {
      lawyer_id: loggedUser?.lawyer_id,
      name: loggedUser?.name,
      username: loggedUser?.username,
      email: loggedUser?.email,
      password: loggedUser?.password,
      access_token: loggedUser?.access_token,
      session: loggedUser?.session,
      role: loggedUser?.role,
      status: loggedUser?.status,
    };

    // check session
    newUser.session = createSession();

    newUser.access_token = createBearer(
      loggedUser?.email,
      loggedUser?.lawyer_id,
      newUser.session
    );

    // insert session
    await sessionCollection.insertOne({
      activity: "login",
      session: newUser.session,
      uid: loggedUser?.lawyer_id,
      created: new Date(),
    });

    // update user

    await collection.updateOne(
      {
        lawyer_id: loggedUser?.lawyer_id,
      },
      {
        $set: {
          session: newUser.session,
          access_token: newUser.access_token,
        },
      }
    );
    closeConn(conn);

    const tmpuser = {
      uid: newUser.lawyer_id,
      name: newUser.name,
      access_token: newUser.access_token,
      session: newUser.session,
      role: newUser.role,
      status: newUser.status,
    };

    res
      .status(200)
      .json({ user: tmpuser, message: "User logged in successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
