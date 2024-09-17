import express from "express";
import Get from "../API/Get";
import Create from "../API/Create";
import Update from "../API/Update";
import Delete from "../API/Delete";

const CustGroupRouter = express.Router();

CustGroupRouter.get("/", new Get().getOne);
CustGroupRouter.get("/all", new Get().getAll);
CustGroupRouter.post("/create", new Create().create);
CustGroupRouter.put("/update", new Update().update);
CustGroupRouter.delete("/delete", new Delete().delete);


export default CustGroupRouter;
