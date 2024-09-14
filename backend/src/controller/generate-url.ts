import { v4 } from "uuid";
import ConnectionRes from "../interface/ConnectionRes";
import connectToCluster from "../connection/connect";
import { Collection, Db } from "mongodb";
import { Request, Response } from "express";
import { comparePassword, validateSession } from "../functions/hash";
import { validateToken } from "../functions/bearer";
import { closeConn } from "../connection/closeConn";

export async function generateURL(req: Request, res: Response) {
  const session = req.query.session as string;
  const uid = req.query.uid as string;
  const token = req.query.access_token as string;
  const client_id = req.body.client_id as string;

  try {
    if (session === undefined) {
      return res.status(400).json({ message: "Session required" });
    }
    if (uid === undefined) {
      return res.status(400).json({ message: "Uid required" });
    }
    if (token === undefined) {
      return res.status(400).json({ message: "Token required" });
    }
    if (client_id === undefined) {
      return res.status(400).json({ message: "Client ID required" });
    }

    // create connection
    const connect: ConnectionRes = await connectToCluster();
    if (typeof connect.conn === "string") {
      return res.status(500).json(connect);
    }

    const conn = connect.conn;
    const db: Db = conn.db("client");
    const urlCollection: Collection = db.collection("urls");
    const sessionCollection: Collection = db.collection("sessions");

    // check session
    let sessionBool = validateSession(session);
    if (sessionBool) {
      return res.status(400).json({ message: "Invalid session" });
    }

    let tokenErr = validateToken(token);
    if (tokenErr !== "") {
      return res.status(400).json({ message: tokenErr });
    }

    // insert session
    await sessionCollection.insertOne({
      activity: "url-generate",
      session: session,
      uid: uid,
      created: new Date(),
    });

    let url = v4();
    await urlCollection.insertOne({
      url: url,
      client_id: client_id,
      submitted: false,
      status: "active",
      progress: 0,
      submittedDate: "",
      // expiration: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
      created: new Date(),
      data: {},
    });

    closeConn(conn);

    return res.status(200).json({
      url: { url: url },
      message: "Url generated",
    });
  } catch (error) {
    console.log(error);
  }
}

export async function validateURL(req: Request, res: Response) {
  const url = req.query.url as string;
  const client_id = req.query.client_id as string;
  const password = req.query.password as string;


  try {
    if (url === undefined) {
      return res.status(400).json({ message: "Url required" });
    }
    if (client_id === undefined) {
      return res.status(400).json({ message: "Client ID required" });
    }

    // create connection
    const connect: ConnectionRes = await connectToCluster();
    if (typeof connect.conn === "string") {
      return res.status(500).json(connect);
    }

    const conn = connect.conn;
    const db: Db = conn.db("client");
    const clientCollection: Collection = db.collection("clients");
    const ClientFormCollection: Collection = db.collection("client-forms");
    const urlCollection: Collection = db.collection("urls");

    // check url
    let urlDoc = await urlCollection.findOne({ url: url });
    if (!urlDoc) {
      return res.status(400).json({ message: "Invalid url" });
    }

    let client = await clientCollection.findOne({ client_id: client_id });
    if (!client) {
      return res.status(400).json({ message: "Invalid client" });
    }

    // check if password is correct
    if (!comparePassword(password, client?.password)) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const form = await ClientFormCollection.findOne({
      client_id: client_id,
      url: url,
    },{
      projection: { _id: 0, data:1 }
    });

    closeConn(conn);

    return res.status(200).json({ message: "Valid url", form: form });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteURL(req: Request, res: Response) {
  const url = req.query.url as string;
  const session = req.query.session as string;
  const uid = req.query.uid as string;
  const token = req.query.token as string;

  try {
    if (url === undefined) {
      return res.status(400).json({ message: "Url required" });
    }
    if (session === undefined) {
      return res.status(400).json({ message: "Session required" });
    }
    if (uid === undefined) {
      return res.status(400).json({ message: "Uid required" });
    }
    if (token === undefined) {
      return res.status(400).json({ message: "Token required" });
    }

    // check session
    let sessionBool = validateSession(session);
    if (sessionBool) {
      return res.status(400).json({ message: "Invalid session" });
    }

    let tokenErr = validateToken(token);
    if (tokenErr !== "") {
      return res.status(400).json({ message: tokenErr });
    }

    // create connection
    const connect: ConnectionRes = await connectToCluster();
    if (typeof connect.conn === "string") {
      return res.status(500).json(connect);
    }

    const conn = connect.conn;
    const db: Db = conn.db("client");
    const urlCollection: Collection = db.collection("urls");
    const sessionCollection: Collection = db.collection("sessions");

    // insert session
    await sessionCollection.insertOne({
      activity: "url-delete",
      session: session,
      uid: uid,
      created: new Date(),
    });

    await urlCollection.deleteOne({ url: url });
    closeConn(conn);
    return res.status(200).json({ message: "Url deleted" });
  } catch (error) {
    console.log(error);
  }
}

export async function getURLs(req: Request, res: Response) {
  const session = req.query.session as string;
  const uid = req.query.uid as string;
  const token = req.query.token as string;

  try {
    if (session === undefined) {
      return res.status(400).json({ message: "Session required" });
    }
    if (uid === undefined) {
      return res.status(400).json({ message: "Uid required" });
    }
    if (token === undefined) {
      return res.status(400).json({ message: "Token required" });
    }

    // create connection
    const connect: ConnectionRes = await connectToCluster();
    if (typeof connect.conn === "string") {
      return res.status(500).json(connect);
    }

    const conn = connect.conn;
    const db: Db = conn.db("client");
    const urlCollection: Collection = db.collection("urls");
    const sessionCollection: Collection = db.collection("sessions");

    // check session
    let sessionBool = validateSession(session);
    if (sessionBool) {
      return res.status(400).json({ message: "Invalid session" });
    }

    let tokenErr = validateToken(token);
    if (tokenErr !== "") {
      return res.status(400).json({ message: tokenErr });
    }

    // insert session
    await sessionCollection.insertOne({
      activity: "url-get",
      session: session,
      uid: uid,
      created: new Date(),
    });

    let urls = await urlCollection.find({}).toArray();

    let Response = urls.map((url) => {
      let status;

      let date = new Date();
      let expiration = url.expiration;

      if (url.submitted === false) {
        status = "Not Submitted";
      } else if (date > expiration) {
        status = "Expired";
      } else {
        status = "Submitted";
      }

      return {
        url: url.url,
        status: status,
      };
    });

    return res.status(200).json({ urls: Response });
  } catch (error) {
    console.log(error);
  }
}
