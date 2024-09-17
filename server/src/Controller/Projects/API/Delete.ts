import { Request,Response } from "express";
import UserAccess from "../../../Base/Class/UserAccess";
import ResponseClass from "../../../Base/Class/Response";
import Projects from "../../../Base/Class/ProjTable";
import ResStatus from "../../../Base/Config/ResStatus";
import CommonMessage from "../../../Base/Config/response/CommonMessage";
import ProjectsMessage from "../../../Base/Config/response/ProjTable";


class DeleteProject{
  
    /**
     * Constructor
     */
    constructor() {
      this.deleteProject = this.deleteProject.bind(this);
    }
  

    /**
     * Delete Project
     * @param req
     * @param res
     */
    async deleteProject(req: Request, res: Response) {
      try {
        new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

        const project = new Projects();
        project.paramRecId(parseInt(req.query.projTable as string));
        await project.connectDb();
        await project.checkNotExists();
        await project.delete();
  
        let response = new ResponseClass(
          ResStatus.Success,
          ProjectsMessage.ProjectDeleted
        );
  
        return res.status(200).json(response);
      } catch (error) {
        if (error instanceof ResponseClass) {
          return res.status(error.getStatus()).json(error.getResponse());
        }
        return res
          .status(ResStatus.InternalServerError)
          .json(
            new ResponseClass(
              ResStatus.InternalServerError,
              CommonMessage.InternalServerError
            ).getResponse()
          );
      }
    }

}

export default DeleteProject;