import { Request, Response } from "express";
import ResponseClass from "../../../Base/Class/Response";
import ResStatus from "../../../Base/Config/ResStatus";
import CommonMessage from "../../../Base/Config/response/CommonMessage";
import ProjectsMessage from "../../../Base/Config/response/ProjTable";
import UserAccess from "../../../Base/Class/UserAccess";
import ProjTable from "../../../Base/Class/ProjTable";
import Collections from "../../../Base/Config/collections";

class CreateProject {
  /**
   * Constructor
   */
  constructor() {
    this.createProject = this.createProject.bind(this);
  }

  /**
   * Create Project
   * @param req
   * @param res
   * @returns Response
   * @Create Project
   */
  async createProject(req: Request, res: Response) {
    try {
      new UserAccess({ Id: req.body.Id, Session: req.body.Session, Token: req.body.Token }).validate();

      let project = new ProjTable(req.body.projTable);
      project.paramCreatedBy(req.body.Id);
      project.paramModifiedBy(req.body.Id);
      await project.connectDb();
      await project.insert();

      let response = new ResponseClass(
        ResStatus.Success,
        ProjectsMessage.ProjectCreated
      );
      response.setData({
        ...project.get(),
        RecId: project.paramRecId()
      });

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

export default CreateProject;
