import { v4 } from "uuid";
import ConnectionRes from "../interface/ConnectionRes";
import connectToCluster from "../connection/connect";
import { Collection, Db } from "mongodb";
import { Request, Response } from "express";
import { comparePassword, validateSession } from "../functions/hash";
import { validateToken } from "../functions/bearer";
import { closeConn } from "../connection/closeConn";
import { RolesEnum } from "../enums/Roles";

export async function createForm(req: Request, res: Response) {
  const session = req.query.session as string;
  const uid = req.query.uid as string;
  const token = req.query.access_token as string;
  const { name, client_id } = req.body;

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
    if (name === undefined) {
      return res.status(400).json({ message: "Name required" });
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
    const ClientFormCollection: Collection = db.collection("client-forms");
    const sessionCollection: Collection = db.collection("sessions");
    const usersCollection: Collection = db.collection("users");
    const ClientCollection: Collection = db.collection("clients");

    // check if user is authorized
    let user = await usersCollection.findOne({ lawyer_id: uid });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    if (user.role !== RolesEnum.admin) {
      let client = await ClientCollection.findOne({ client_id: client_id });
      if (!client) {
        return res.status(400).json({ message: "Client not found" });
      }
      if (client.lawyer_id !== uid) {
        return res.status(400).json({ message: "Unauthorized" });
      }
    }

    // insert session
    await sessionCollection.insertOne({
      activity: "form-create",
      session: session,
      uid: uid,
      created: new Date(),
    });

    const form_id = v4();
    await ClientFormCollection.insertOne({
      form_id: form_id,
      client_id: client_id,
      name: name,
      status: "active",
      progress: 0,
      submitted: false,
      submittedDate: "",
      data: {},
      created: new Date(),
    });

    closeConn(conn);
    return res.status(200).json({ message: "Form created", form: form_id });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
}

export async function deleteForm(req: Request, res: Response) {
  const session = req.query.session as string;
  const uid = req.query.uid as string;
  const token = req.query.access_token as string;
  const form_id = req.query.form_id as string;
  const client_id = req.query.client_id as string;

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
    if (form_id === undefined) {
      return res.status(400).json({ message: "Form ID required" });
    }
    if (client_id === undefined) {
      return res.status(400).json({ message: "Client ID required" });
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
    const ClientFormCollection: Collection = db.collection("client-forms");
    const sessionCollection: Collection = db.collection("sessions");
    const usersCollection: Collection = db.collection("users");
    const ClientCollection: Collection = db.collection("clients");

    // check if form exists
    let form = await ClientFormCollection.findOne({ form_id: form_id });
    if (!form) {
      return res.status(400).json({ message: "Form not found" });
    }

    // check if user is authorized
    let user = await usersCollection.findOne({ lawyer_id: uid });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    if (user.role !== RolesEnum.admin) {
      let client = await ClientCollection.findOne({ client_id: client_id });
      if (!client) {
        return res.status(400).json({ message: "Client not found" });
      }
      if (client.lawyer_id !== uid) {
        return res.status(400).json({ message: "Unauthorized" });
      }
    }

    // insert session
    await sessionCollection.insertOne({
      activity: "form-delete",
      session: session,
      uid: uid,
      created: new Date(),
    });

    await ClientFormCollection.deleteOne({ form_id: form_id });

    closeConn(conn);
    return res.status(200).json({ message: "Form deleted" });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
}

export async function getAllForm(req: Request, res: Response) {
  const session = req.query.session as string;
  const uid = req.query.uid as string;
  const token = req.query.access_token as string;

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
    const ClientFormCollection: Collection = db.collection("client-forms");
    const usersCollection: Collection = db.collection("users");
    const ClientCollection: Collection = db.collection("clients");

    // check if user is authorized
    let user = await usersCollection.findOne({ lawyer_id: uid });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    if (user.role !== RolesEnum.admin) {
      let clients = await ClientCollection.find(
        { lawyer_id: uid },
        {
          projection: {
            client_id: 1,
            _id: 0,
            name: 1,
            username: 1,
          },
        }
      ).toArray();
      if (clients.length === 0) {
        return res.status(200).json([]);
      }
      let client_ids = clients.map((client) => client.client_id);
      let forms = await ClientFormCollection.find({
        client_id: { $in: client_ids },
      }).toArray();
      closeConn(conn);

      let formData = [];
      formData = forms.map((form) => {
        let client = clients.find(
          (client) => client.client_id === form.client_id
        );
        return {
          form_id: form.form_id,
          name: form.name,
          client_id: form.client_id,
          client_name: client?.name,
          client_username: client?.username,
          created: form.created,
          status: form.status,
          submitted: form.submitted,
          progress: form.progress,
          submittedDate: form.submittedDate,
        };
      });

      return res.status(200).json(formData);
    }

    let forms = await ClientFormCollection.find(
      {},
      {
        projection: {
          _id: 0,
          form_id: 1,
          name: 1,
          client_id: 1,
          created: 1,
          status: 1,
          submitted: 1,
          progress: 1,
          submittedDate: 1,
        },
      }
    ).toArray();


    if(forms.length === 0){
      return res.status(200).json([]);
    }

    let formData = [];

    for (let i = 0; i < forms.length; i++) {
      let client = await ClientCollection.findOne({
        client_id: forms[i].client_id,
      });
      formData.push({
        form_id: forms[i].form_id,
        name: forms[i].name,
        client_id: forms[i].client_id,
        client_name: client?.name,
        client_username: client?.username,
        created: forms[i].created,
        status: forms[i].status,
        submitted: forms[i].submitted,
        progress: forms[i].progress,
        submittedDate: forms[i].submittedDate,
      });
    }

    closeConn(conn);
    return res.status(200).json(formData);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
}

export async function getFormDataDetails(req:Request,res:Response){
  const form_id = req.query.form_id as string;
  const client_id = req.query.client_id as string;
  const form_name = req.query.form_name as string;

  try {
    if (form_id === undefined) {
      return res.status(400).json({ message: "Form ID required" });
    }
    if (client_id === undefined) {
      return res.status(400).json({ message: "Client ID required" });
    }
    if (form_name === undefined) {
      return res.status(400).json({ message: "Form Name required" });
    }


    // create connection
    const connect: ConnectionRes = await connectToCluster();
    if (typeof connect.conn === "string") {
      return res.status(500).json(connect);
    }

    const conn = connect.conn;
    const db: Db = conn.db("client");
    const ClientFormCollection: Collection = db.collection("client-forms");

    // check if form exists
    let form = await ClientFormCollection.findOne({ form_id: form_id, client_id: client_id, name: form_name},{
      projection: {
        _id: 0,
        data: 1
      }
    });
    if (!form) {
      return res.status(400).json({ message: "Form not found" });
    }

    closeConn(conn);
    return res.status(200).json(form);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
}
