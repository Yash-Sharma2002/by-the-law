import { Request, Response } from 'express';
import ResStatus from '../../../Base/Config/ResStatus';
import ResponseClass from '../../../Base/Class/Response';
import ClientFieldsMessage from '../../../Base/Config/response/Client';
import CommonMessage from '../../../Base/Config/response/CommonMessage';
import UserAccess from '../../../Base/Class/UserAccess';
import Client from '../../../Base/Class/Client';


class CreateClient {

    /**
     * Contructor
     */
    constructor() {
        this.create = this.create.bind(this);
    }

    /**
     * Create Client
     * @param req
     * @param res
     * @returns Response
     * @Create Client
     */
    async create(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.body.Id, Session: req.body.Session, Token: req.body.Token }).validate();

            let clt = new Client(req.body.custTable);
            clt.validate();
            clt.paramCreatedBy(req.body.Id);
            clt.paramModifiedBy(req.body.Id);
            await clt.connectDb();
            await clt.checkExists();
            await clt.insert();

            let response = new ResponseClass(
                ResStatus.Success,
                ClientFieldsMessage.Insert
            );
            response.setData({
                ...clt.get(),
                RecId:clt.paramRecId()
            });
            clt.flush();
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

export default CreateClient;