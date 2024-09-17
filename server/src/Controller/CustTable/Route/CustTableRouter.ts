import express from "express";
import CreateClient from "../API/Create";
import UpdateClient from "../API/Update";
import DeleteClient from "../API/Delete";
import GetClients from "../API/Get";


const CustTableRouter = express.Router();

CustTableRouter.get("/my",new GetClients().getByManager);
CustTableRouter.get("/all",new GetClients().getAll);
CustTableRouter.get("/",new GetClients().getOne);
CustTableRouter.get("/profile",new GetClients().getProfile);
CustTableRouter.post("/create",new CreateClient().create);
CustTableRouter.put("/update",new UpdateClient().updateClient);
CustTableRouter.delete("/delete",new DeleteClient().deleteClient);


export default CustTableRouter;
