import express from "express";
import CreateProject from "../API/Create";
import UpdateProject from "../API/Update";
import DeleteProject from "../API/Delete";
import ResourceRouter from "./ReourceRouter";
import GetProjects from "../API/Get";
const ProjtableRouter = express.Router();

ProjtableRouter.get("/",new GetProjects().getOne);
ProjtableRouter.get("/all",new GetProjects().getAll);
ProjtableRouter.get("/filter/projManager",new GetProjects().getByProjManager);
ProjtableRouter.get("/assigned",new GetProjects().getAssignedProjects);
ProjtableRouter.post("/create",new CreateProject().createProject); 
ProjtableRouter.put("/update",new UpdateProject().updateProject)
ProjtableRouter.delete("/delete",new DeleteProject().deleteProject);

ProjtableRouter.use("/resource",ResourceRouter)

export default ProjtableRouter;
