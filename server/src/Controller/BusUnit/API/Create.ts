import { Request, Response } from 'express';
import ResStatus from '../../../Base/Config/ResStatus';
import ResponseClass from '../../../Base/Class/Response';
import UserAccess from '../../../Base/Class/UserAccess';
import CommonMessage from '../../../Base/Config/response/CommonMessage';
import BusUnit from '../../../Base/Class/BusUnit';
import BusUnitMessage from '../../../Base/Config/response/BusUnit';

class Create {
    /**
      * Constructor
      */
    constructor() {
        this.create = this.create.bind(this);
    }

    /**
    * Create Business Unit
    * @param req
    * @param res
    * @returns Response
    * @Create Business Unit
    */

    async create(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.body.Id, Session: req.body.Session, Token: req.body.Token }).validate();

            let busUnit = new BusUnit(req.body.busUnit);
            busUnit.paramCreatedBy(req.body.Id);
            busUnit.paramModifiedBy(req.body.Id);
            await busUnit.connectDb();
            await busUnit.insert();

            let response = new ResponseClass(
                ResStatus.Success,
                BusUnitMessage.CREATED
            );
            response.setData({ ...busUnit.get(), RecId: busUnit.paramRecId() });
            busUnit.flush();
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

export default Create;