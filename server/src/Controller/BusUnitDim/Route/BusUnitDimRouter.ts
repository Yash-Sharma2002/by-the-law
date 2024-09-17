import express from "express";
import Get from "../API/Get";
import Create from "../API/Create";
import Update from "../API/Update";
import Delete from "../API/Delete";

const BusUnitDimRouter = express.Router();

BusUnitDimRouter.get("/", new Get().getOne);
BusUnitDimRouter.get("/all", new Get().getAll);
BusUnitDimRouter.get("/ref", new Get().getAllByRef);
BusUnitDimRouter.post("/create", new Create().create);
BusUnitDimRouter.put("/update", new Update().update);
BusUnitDimRouter.delete("/delete", new Delete().delete);


export default BusUnitDimRouter;
