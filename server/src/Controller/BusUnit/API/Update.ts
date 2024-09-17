import { Request, Response } from 'express';
import ResStatus from '../../../Base/Config/ResStatus';
import ResponseClass from '../../../Base/Class/Response';
import UserAccess from '../../../Base/Class/UserAccess';
import CommonMessage from '../../../Base/Config/response/CommonMessage';
import BusUnit from '../../../Base/Class/BusUnit';
import BusUnitMessage from '../../../Base/Config/response/BusUnit';


class Update {

    /**
     * Constructor
     */
    constructor() {
        this.update = this.update.bind(this);
    }

    /**
     * Update Business Unit 
     * @param req
     * @param res
     * @returns Response
     * @Update Business Unit
     */
    async update(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.body.Id, Session: req.body.Session, Token: req.body.Token }).validate();

            let busUnit = new BusUnit(req.body.busUnit);
            busUnit.paramModifiedBy(req.body.Id);
            await busUnit.connectDb();
            await busUnit.update();

            let response = new ResponseClass(
                ResStatus.Success,
                BusUnitMessage.UPDATED
            );
            response.setData({
                ...busUnit.get(),
                RecId: busUnit.paramRecId()
            });
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

export default Update;