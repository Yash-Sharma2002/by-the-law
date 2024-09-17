import express from "express";
import Get from "../API/Get";
import Create from "../API/Create";
import Update from "../API/Update";
import Delete from "../API/Delete";

const UserGroupRouter = express.Router();

UserGroupRouter.get("/", new Get().getOne);
UserGroupRouter.get("/name", new Get().getByName);
UserGroupRouter.get("/all", new Get().getAll);
UserGroupRouter.post("/create", new Create().create);
UserGroupRouter.put("/update", new Update().update);
UserGroupRouter.delete("/delete", new Delete().delete);


export default UserGroupRouter;
