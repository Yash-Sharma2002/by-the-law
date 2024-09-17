import express from "express";
import Create from "../API/Create";
import Delete from "../API/Delete";
import Update from "../API/Update";
import Get from "../API/Get";
const SecurityRoleRouter = express.Router();

SecurityRoleRouter.get("/",new Get().getOne);
SecurityRoleRouter.get("/all",new Get().getAll);
SecurityRoleRouter.post("/create",new Create().create); 
SecurityRoleRouter.post("/add",new Create().add); 
SecurityRoleRouter.put("/edit",new Update().edit)
SecurityRoleRouter.delete("/remove",new Delete().remove);


export default SecurityRoleRouter;
