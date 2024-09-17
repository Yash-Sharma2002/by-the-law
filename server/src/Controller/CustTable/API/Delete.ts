import { Request, Response } from "express";
import ResStatus from "../../../Base/Config/ResStatus";
import ResponseClass from "../../../Base/Class/Response";
import ClientFieldsMessage from "../../../Base/Config/response/Client";
import CommonMessage from "../../../Base/Config/response/CommonMessage";
import UserAccess from "../../../Base/Class/UserAccess";
import Client from "../../../Base/Class/Client";
import Location from "../../../Base/Class/Location";
import Collections from "../../../Base/Config/collections";
import SysTableId from "../../../Base/Class/SysTableId";

class DeleteClient {
  /**
   * Constructor
   */
  constructor() {
    this.deleteClient = this.deleteClient.bind(this);
  }

  /**
   * Delete Client
   * @param req
   * @param res
   * @returns Response
   * @Delete Client
   */
  async deleteClient(req: Request, res: Response) {
    try {
      new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

      let clt = new Client();
      clt.paramRecId(parseInt(req.query.custTable as string));
      await clt.connectDb();
      await clt.delete();
      clt.flush();

      let location = new Location();
      location.paramRefRecId(parseInt(req.query.custTable as string));
      location.paramRefTableId( await new SysTableId().getTableId(Collections.Client));
      await location.connectDb();
      await location.deleteWithRef();
      location.flush();

      return res.status(ResStatus.Success).send(
        new ResponseClass(
          ResStatus.Success,
          ClientFieldsMessage.Delete
        ).getResponse()
      );
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

export default DeleteClient;
