import { Request, Response } from "express";
import ResStatus from "../../../Base/Config/ResStatus";
import ResponseClass from "../../../Base/Class/Response";
import ClientFieldsMessage from "../../../Base/Config/response/Client";
import CommonMessage from "../../../Base/Config/response/CommonMessage";
import UserAccess from "../../../Base/Class/UserAccess";
import Collections from "../../../Base/Config/collections";
import Client from "../../../Base/Class/Client";

class UpdateClient {
  /**
   * Constructor
   */
  constructor() {
    this.updateClient = this.updateClient.bind(this);
  }

  /**
   * Update Client
   * @param req
   * @param res
   * @returns Response
   * @Update Client
   */
  async updateClient(req: Request, res: Response) {
    try {
      new UserAccess({ Id: req.body.Id, Session: req.body.Session, Token: req.body.Token }).validate();

      let client = new Client(req.body.custTable);
      client.validate();
      client.paramModifiedBy(req.body.Id);
      await client.connectDb();
      await client.checkNotExists();
      await client.update();

      let response = new ResponseClass(
        ResStatus.Success,
        ClientFieldsMessage.Update
      );
      response.setData(client.get());
      client.flush();

      return res.status(ResStatus.Success).send(response.getResponse());
    } catch (error) {
      if (error instanceof ResponseClass) {
        return res.status(error.getStatus()).send(error.getResponse());
      }
      return res.status(ResStatus.InternalServerError)
        .send(
          new ResponseClass(
            ResStatus.InternalServerError,
            CommonMessage.InternalServerError
          ).getResponse()
        );
    }
  }

}

export default UpdateClient;
