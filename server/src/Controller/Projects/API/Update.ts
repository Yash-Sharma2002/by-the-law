import { Request, Response } from "express";
import UserAccess from "../../../Base/Class/UserAccess";
import ResStatus from "../../../Base/Config/ResStatus";
import ProjectsMessage from "../../../Base/Config/response/ProjTable";
import ResponseClass from "../../../Base/Class/Response";
import CommonMessage from "../../../Base/Config/response/CommonMessage";
import ProjTable from "../../../Base/Class/ProjTable";
import Collections from "../../../Base/Config/collections";
import ProjEmplSetup from "../../../Base/Class/ProjEmplSetup";

class UpdateProject {
  /**
   * Constructor
   */
  constructor() {
    this.updateProject = this.updateProject.bind(this);
  }

  /**
   * Update Project
   * @param req
   * @param res
   */
  async updateProject(req: Request, res: Response) {
    try {
      new UserAccess({ Id: req.body.Id, Session: req.body.Session, Token: req.body.Token }).validate();

      const project = new ProjTable(req.body.projTable);
      project.paramModifiedBy(req.body.Id);
      await project.connectDb();
      await project.checkNotExists();
      await project.update();

      let response = new ResponseClass(
        ResStatus.Success,
        ProjectsMessage.ProjectUpdated
      );

      response.setData(project.get());
      project.flush();
      return res.status(ResStatus.Success).send(response.getResponse());
    } catch (error) {
      if (error instanceof ResponseClass) {
        return res.status(error.getStatus()).send(error.getResponse());
      }
      return res
        .status(ResStatus.InternalServerError)
        .send(
          new ResponseClass(
            ResStatus.InternalServerError,
            CommonMessage.InternalServerError
          ).getResponse()
        );
    }
  }


}

export default UpdateProject;