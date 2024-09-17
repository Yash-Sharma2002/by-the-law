import express from "express";
import ResourceManager from "../API/Resource";
import UpdateProject from "../API/Update";


const ResourceRouter = express.Router();

ResourceRouter.get("/",new ResourceManager().getOne);
ResourceRouter.get("/all",new ResourceManager().getAll);
ResourceRouter.post("/assign",new ResourceManager().addResource); 
ResourceRouter.delete("/remove",new ResourceManager().removeResource)

export default ResourceRouter;
