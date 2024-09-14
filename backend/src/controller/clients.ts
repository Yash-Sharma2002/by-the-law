import { Request, Response } from "express";
import { Collection, Db } from "mongodb";
import connectToCluster from "../connection/connect";
import ConnectionRes from "../interface/ConnectionRes";
import { hash, validateSession } from "../functions/hash";
import { validateToken } from "../functions/bearer";
import { closeConn } from "../connection/closeConn";
import registerValidate from "../functions/registerValidate";
import RegisterError from "../interface/RegisterError";
import { v4 } from "uuid";
import Client from "../interface/Client";

export async function getAllClients(req: Request, res: Response) {
  const session = req.query.session as string;
  const uid = req.query.uid as string;
  const token = req.query.access_token as string;

  try {
    if (session === undefined) {
      return res.status(400).json({ message: "Session required" });
    }
    if (uid === undefined) {
      return res.status(400).json({ message: "Cid required" });
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
    const clientsCollection: Collection = db.collection("clients");
    const LawyerCollection: Collection = db.collection("users");
    const sessionCollection: Collection = db.collection("sessions");

    // insert session
    await sessionCollection.insertOne({
      activity: "get-all-clients",
      session: session,
      uid: uid,
      created: new Date(),
    });

    //get all clients
    let clients = await clientsCollection
      .find(
        {},
        {
          projection: {
            _id: 0,
            username: 1,
            email: 1,
            client_id: 1,
            status: 1,
            created: 1,
            lawyer_id: 1,
            name: 1,
          },
        }
      )
      .toArray();

    let clientWithlawyer = [];

    for (let i = 0; i < clients.length; i++) {
      let client = clients[i];
      let lawyer = await LawyerCollection.findOne(
        { lawyer_id: client.lawyer_id },
        { projection: { name: 1, email: 1, _id: 0 } }
      );
      clientWithlawyer.push({ ...client, lawyer: lawyer });
    }

    closeConn(conn);
    return res.status(200).json(clientWithlawyer);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Unknown error" });
  }
}

export async function updateClient(req: Request, res: Response) {
  const session = req.query.session as string;
  const uid = req.query.uid as string;
  const token = req.query.access_token as string;

  const { client_id, name, username, email, lawyer_id, status } = req.body;

  try {
    if (session === undefined) {
      return res.status(400).json({ message: "Session required" });
    }
    if (uid === undefined) {
      return res.status(400).json({ message: "User Id required" });
    }
    if (client_id === undefined) {
      return res.status(400).json({ message: "Clientid required" });
    }
    if (token === undefined) {
      return res.status(400).json({ message: "Token required" });
    }
    if (name === undefined) {
      return res.status(400).json({ message: "Name required" });
    }
    if (username === undefined) {
      return res.status(400).json({ message: "Username required" });
    }
    if (email === undefined) {
      return res.status(400).json({ message: "Email required" });
    }
    if (lawyer_id === undefined) {
      return res.status(400).json({ message: "Lawyer Assigned required" });
    }
    if (status === undefined) {
      return res.status(400).json({ message: "Status required" });
    }

    //check session
    let sessionbool = validateSession(session);
    if (sessionbool) {
      return res.status(400).json({ message: "Invalid session" });
    }
    let tokenErr = validateToken(token);
    if (tokenErr !== "") {
      return res.status(400).json({ message: tokenErr });
    }

    //create connection
    const connect: ConnectionRes = await connectToCluster();
    if (typeof connect.conn === "string") {
      return res.status(500).json(connect);
    }
    const conn = connect.conn;
    const db: Db = conn.db("client");
    const clientsCollection: Collection = db.collection("clients");
    const sessionCollection: Collection = db.collection("sessions");

    let tempClient = await clientsCollection.findOne({ client_id: client_id });
    if (!tempClient) {
      return res.status(400).json({ message: "Client not found" });
    }

    tempClient = await clientsCollection.findOne(
      { username: username },
      { projection: { username: 1, client_id: 1 } }
    );
    if (tempClient !== null && tempClient.client_id !== client_id) {
      return res.status(400).json({ message: "Account already taken" });
    }

    tempClient = await clientsCollection.findOne(
      { email: email },
      { projection: { email: 1, client_id: 1 } }
    );
    if (tempClient !== null && tempClient.client_id !== client_id) {
      return res.status(400).json({ message: "Email already taken" });
    }

    //insert session
    await sessionCollection.insertOne({
      activity: "update-client",
      session: session,
      uid: uid,
      created: new Date(),
    });

    await clientsCollection.updateOne(
      {
        client_id: client_id,
      },
      {
        $set: {
          name: name,
          username: username,
          email: email,
          lawyer_id: lawyer_id,
          status: status,
          modified: new Date(),
        },
      }
    );
    closeConn(conn);
    return res.status(200).json({ message: "Client updated" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Unknown error" });
  }
}

export async function deleteClient(req: Request, res: Response) {
  const session = req.query.session as string;
  const uid = req.query.uid as string;
  const client_id = req.query.client_id as string;
  const token = req.query.access_token as string;

  try {
    if (session === undefined) {
      return res.status(400).json({ message: "Session required" });
    }
    if (uid === undefined) {
      return res.status(400).json({ message: "User Id required" });
    }
    if (client_id === undefined) {
      return res.status(400).json({ message: "Client is required" });
    }
    if (token === undefined) {
      return res.status(400).json({ message: "Token required" });
    }

    //check session
    let sessionbool = validateSession(session);
    if (sessionbool) {
      return res.status(400).json({ message: "Invalid session" });
    }
    let tokenErr = validateToken(token);
    if (tokenErr !== "") {
      return res.status(400).json({ message: tokenErr });
    }

    //create connection
    const connect: ConnectionRes = await connectToCluster();
    if (typeof connect.conn === "string") {
      return res.status(500).json(connect);
    }
    const conn = connect.conn;
    const db: Db = conn.db("client");
    const clientsCollection: Collection = db.collection("clients");
    const sessionCollection: Collection = db.collection("sessions");

    //insert session
    await sessionCollection.insertOne({
      activity: "delete-client",
      session: session,
      cid: uid,
      created: new Date(),
    });

    let client = await clientsCollection.findOne({ client_id: client_id });
    if (!client) {
      return res.status(400).json({ message: "Client not found" });
    }

    await clientsCollection.deleteOne({ client_id: client_id });
    closeConn(conn);
    return res.status(200).json({ message: "Client deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Unknown error" });
  }
}

export async function createClient(req: Request, res: Response) {
  const session = req.query.session as string;
  const uid = req.query.uid as string;
  const access_token = req.query.access_token as string;
  const { name, username, email, password, lawyer_id } = req.body;

  try {
    if (name === undefined) {
      return res.status(400).json({ message: "Name required" });
    }
    if (username === undefined) {
      return res.status(400).json({ message: "Username required" });
    }
    if (email === undefined) {
      return res.status(400).json({ message: "Email required" });
    }
    if (password === undefined) {
      return res.status(400).json({ message: "Password required" });
    }
    if (lawyer_id === undefined) {
      return res.status(400).json({ message: "Lawyer Assigned required" });
    }
    if (session === undefined) {
      return res.status(400).json({ message: "Session required" });
    }
    if (uid === undefined) {
      return res.status(400).json({ message: "User Id required" });
    }
    if (access_token === undefined) {
      return res.status(400).json({ message: "Token required" });
    }

    //check session
    let sessionBool = validateSession(session);
    if (sessionBool) {
      return res.status(401).json({ message: "Session invalid" });
    }

    let tokenErr = validateToken(access_token);
    if (tokenErr !== "") {
      return res.status(401).json({ message: tokenErr });
    }

    //check for errors
    let errors: RegisterError | undefined = {} as RegisterError;
    errors = registerValidate(username, email, password, name).errors;
    if (errors && Object.keys(errors).length > 0) {
      return res.status(400).json({
        errors: errors,
        message: "Invalid input(s)",
      });
    }

    //create connection
    const connect: ConnectionRes = await connectToCluster();
    if (typeof connect.conn === "string") {
      return res.status(500).json(connect);
    }

    const conn = connect.conn;
    const db: Db = conn.db("client");
    const collection: Collection = db.collection("clients");
    const sessionCollection: Collection = db.collection("sessions");

    //check if already exists
    const filteredDocs = await collection.find({ email: email }).toArray();
    if (filteredDocs.length > 0) {
      return res.status(400).json({
        errors: {
          message: "Email already exists",
        },
        email: email,
      });
    }

    //create client if everything is valid
    let cidNew = v4();

    await sessionCollection.insertMany([
      {
        activity: "create-client",
        session: session,
        cid: uid,
        created: new Date(),
      },
    ]);

    const client: Client = {
      client_id: cidNew,
      name: name,
      username: username,
      email: email,
      password: hash(password),
      status: "active",
      created: new Date(),
      lawyer_id: lawyer_id,
    };

    await collection.insertOne(client);

    closeConn(conn);
    const tmpClient = {
      client_id: client.client_id,
      name: client.name,
      username: client.username,
    };
    res
      .status(201)
      .json({ client: tmpClient, message: "Client created successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function getClient(req: Request, res: Response) {
  const session = req.query.session as string;
  const uid = req.query.uid as string;
  const client_id = req.query.client_id as string;
  const token = req.query.access_token as string;

  try {
    if (session === undefined) {
      return res.status(400).json({ message: "Session required" });
    }
    if (uid === undefined) {
      return res.status(400).json({ message: "User Id required" });
    }
    if (client_id === undefined) {
      return res.status(400).json({ message: "Client id required" });
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
    const clientsCollection: Collection = db.collection("clients");
    const UrlCollection: Collection = db.collection("urls");
    const LawyerCollection: Collection = db.collection("users");
    const FormsCollection: Collection = db.collection("forms");
    const sessionCollection: Collection = db.collection("sessions");

    // insert session
    await sessionCollection.insertOne({
      activity: "get-client",
      session: session,
      uid: uid,
      created: new Date(),
    });

    let client = await clientsCollection.findOne(
      { client_id: client_id },
      {
        projection: {
          username: 1,
          name: 1,
          email: 1,
          client_id: 1,
          status: 1,
          created: 1,
          lawyer_id: 1,
        },
      }
    );

    const lawyer = await LawyerCollection.findOne(
      { lawyer_id: client!.lawyer_id },
      {
        projection: {
          username: 1,
          email: 1,
          _id: 0,
          name: 1,
          status: 1,
          role: 1,
        },
      }
    );

    const urls = await UrlCollection.find(
      { client_id: client_id },
      {
        projection: {
          _id: 0,
          url: 1,
          submitted: 1,
          status: 1,
          progress: 1,
          created: 1,
          submittedDate: 1,
        },
      }
    ).toArray();

    const forms = await FormsCollection.find(
      { client_id: client_id },
      {
        projection: {
          _id: 0,
          submitted: 1,
          status: 1,
          progress: 1,
          created: 1,
          submittedDate: 1,
          name: 1,
          form_id: 1,
        },
      }
    ).toArray();

    closeConn(conn);
    return res.status(200).json({ client, lawyer, urls, forms });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Unknown error" });
  }
}
