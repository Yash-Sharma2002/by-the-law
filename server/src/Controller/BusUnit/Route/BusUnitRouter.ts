import express from "express";
import Get from "../API/Get";
import Create from "../API/Create";
import Update from "../API/Update";
import Delete from "../API/Delete";

const BusUnitRouter = express.Router();

BusUnitRouter.get("/", new Get().getOne);
BusUnitRouter.get("/all", new Get().getAll);
BusUnitRouter.post("/create", new Create().create);
BusUnitRouter.put("/update", new Update().update);
BusUnitRouter.delete("/delete", new Delete().delete);


export default BusUnitRouter;
