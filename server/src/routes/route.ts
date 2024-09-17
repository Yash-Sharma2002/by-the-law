import express from "express";


import UserRouter from "../Controller/User/Route/UserRouter";
import SequenceRouter from "../Controller/Sequence/Router/SequenceRouter";
import SecurityUserRoleRouter from "../Controller/SecurityUserRole/Route/SecurityUserRole";
import SecurityRoleRouter from "../Controller/SecurityRole/Route/SecurityRole";
import CustGroupRouter from "../Controller/CustGroup/Route/CustGroupRouter";
import BusUnitRouter from "../Controller/BusUnit/Route/BusUnitRouter";
import BusUnitDimRouter from "../Controller/BusUnitDim/Route/BusUnitDimRouter";
import BusUnitValueSetRouter from "../Controller/BusUnitValueSet/Route/BusUnitValueSetRouter";
import RemarksRouter from "../Controller/Remarks/Router/RemarksRouter";
import ProjtableRouter from "../Controller/Projects/Router/ProjtableRouter";
import CustTableRouter from "../Controller/CustTable/Route/CustTableRouter";

const MainRouter = express.Router();

MainRouter.use("/api/user/", UserRouter);
MainRouter.use("/api/securityRole/", SecurityRoleRouter);
MainRouter.use("/api/securityUserRole/", SecurityUserRoleRouter);
MainRouter.use("/api/sequence/", SequenceRouter);
MainRouter.use("/api/custGroup/", CustGroupRouter);
MainRouter.use("/api/custTable/", CustTableRouter);
MainRouter.use("/api/remarks/", RemarksRouter);
MainRouter.use("/api/busUnit/", BusUnitRouter);
MainRouter.use("/api/busUnitDim/", BusUnitDimRouter);
MainRouter.use("/api/busUnitValueSet/", BusUnitValueSetRouter);
MainRouter.use("/api/projTable/", ProjtableRouter);


export default MainRouter;
