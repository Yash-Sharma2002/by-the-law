import express from "express";
import Create from "../API/Create";
import Delete from "../API/Delete";
import Update from "../API/Update";
import Get from "../API/Get";
const SecurityUserRoleRouter = express.Router();

SecurityUserRoleRouter.get("/",new Get().getOne);
SecurityUserRoleRouter.get("/all",new Get().getAll);
SecurityUserRoleRouter.get("/role",new Get().getByRole);
SecurityUserRoleRouter.post("/create",new Create().create); 
SecurityUserRoleRouter.post("/add",new Create().add); 
SecurityUserRoleRouter.put("/edit",new Update().edit)
SecurityUserRoleRouter.delete("/remove",new Delete().remove);


export default SecurityUserRoleRouter;
