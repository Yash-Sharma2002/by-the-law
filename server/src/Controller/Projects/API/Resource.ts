import UserAccess from "../../../Base/Class/UserAccess";
import ResponseClass from "../../../Base/Class/Response";
import ResStatus from "../../../Base/Config/ResStatus";
import { Request, Response } from "express";
import CommonMessage from "../../../Base/Config/response/CommonMessage";
import ProjEmplSetup from "../../../Base/Class/ProjEmplSetup";
import ProjEmplSetupMessages from "../../../Base/Config/response/ProjEmplSetup";
import Collections from "../../../Base/Config/collections";

class ResourceManager {

  /**
   * Constructor
   */
  constructor() {
    this.getOne = this.getOne.bind(this);
    this.getAll = this.getAll.bind(this);
    this.addResource = this.addResource.bind(this);
    this.removeResource = this.removeResource.bind(this);
  }

  /**
   * Add Resource
   * @param req
   * @param res
   */
  async addResource(req: Request, res: Response) {
    try {
      new UserAccess({ Id: req.body.Id, Session: req.body.Session, Token: req.body.Token }).validate();

      let projemplsetup = new ProjEmplSetup(req.body.projEmplSetup);
      projemplsetup.paramCreatedBy(req.body.Id);
      projemplsetup.paramModifiedBy(req.body.Id);
      await projemplsetup.connectDb();
      await projemplsetup.checkExists();
      await projemplsetup.insert();

      let response = new ResponseClass(ResStatus.Success, ProjEmplSetupMessages.EMPLOYEE_ASSIGNED);
      response.setData({
        ...projemplsetup.get(),
        RecId: projemplsetup.paramRecId()
      });

      return res.status(ResStatus.Success).send(response.getResponse());
    } catch (error) {
      if (error instanceof ResponseClass) {
        return res.status(error.getStatus()).send(error.getResponse());
      }
      return res.status(ResStatus.InternalServerError).send(new ResponseClass(ResStatus.InternalServerError, CommonMessage.InternalServerError).getResponse());
    }
  }

  /**
   * Remove Resource
   * @param req
   * @param res
   */
  async removeResource(req: Request, res: Response) {
    try {
      new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

      let projemplsetup = new ProjEmplSetup();
      projemplsetup.paramRecId(parseInt(req.query.projEmplSetup as string));
      await projemplsetup.connectDb();
      await projemplsetup.delete();
      projemplsetup.flush();

      return res
        .status(ResStatus.Success)
        .json(
          new ResponseClass(ResStatus.Success, ProjEmplSetupMessages.EMPLOYEE_UNASSIGNED)
        );
    } catch (error) {
      if (error instanceof ResponseClass) {
        return res.status(error.getStatus()).send(error.getResponse());
      }
      return res.status(ResStatus.InternalServerError).send(new ResponseClass(ResStatus.InternalServerError, CommonMessage.InternalServerError).getResponse());

    }
  }

  /**
   * Get Assigned Resources
   * @param req
   * @param res
   */
  async getOne(req: Request, res: Response) {
    try {
      new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

      let projemplsetup = new ProjEmplSetup();
      await projemplsetup.connectDb();
      let data = await projemplsetup.getAll(Collections.ProjEmplSetup, { ProjId:req.query.projEmplSetup as string });
      let response = new ResponseClass(ResStatus.Success, CommonMessage.DataFound);
      response.setData(data);
      return res.status(ResStatus.Success).send(response.getResponse());
    } catch (error) {
      if (error instanceof ResponseClass) {
        return res.status(error.getStatus()).send(error.getResponse());
      }
      return res.status(ResStatus.InternalServerError).send(new ResponseClass(ResStatus.InternalServerError, CommonMessage.InternalServerError).getResponse());
    }
  }

  /**
   * Get All Resources
   * @param req
   * @param res
   */
  async getAll(req: Request, res: Response) {
    try {
      new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

      let projemplsetup = new ProjEmplSetup();
      await projemplsetup.connectDb();
      let data = await projemplsetup.getAll(Collections.ProjEmplSetup, {});
      let response = new ResponseClass(ResStatus.Success, CommonMessage.DataFound);
      response.setData(data);

      return res.status(ResStatus.Success).send(response.getResponse());
    } catch (error) {
      if (error instanceof ResponseClass) {
        return res.status(error.getStatus()).send(error.getResponse());
      }
      return res.status(ResStatus.InternalServerError).send(new ResponseClass(ResStatus.InternalServerError, CommonMessage.InternalServerError).getResponse());
    }
  }

}

export default ResourceManager;