import express from "express";
import Get from "../API/Get";
import Create from "../API/Create";
import Update from "../API/Update";
import Delete from "../API/Delete";

const BusUnitValueSetRouter = express.Router();

BusUnitValueSetRouter.get("/", new Get().getOne);
BusUnitValueSetRouter.get("/all", new Get().getAll);
BusUnitValueSetRouter.get("/allByUnit", new Get().getAllByUnit);
BusUnitValueSetRouter.post("/create", new Create().createOne);
BusUnitValueSetRouter.post("/createMany", new Create().createMany);
BusUnitValueSetRouter.put("/update", new Update().update);
BusUnitValueSetRouter.delete("/delete", new Delete().delete);


export default BusUnitValueSetRouter;
