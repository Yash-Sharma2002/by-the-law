import { Request, Response } from 'express';
import ResStatus from '../../../Base/Config/ResStatus';
import ResponseClass from '../../../Base/Class/Response';
import UserAccess from '../../../Base/Class/UserAccess';
import CommonMessage from '../../../Base/Config/response/CommonMessage';
import BusUnitValueSet from '../../../Base/Class/BusUnitValueSet';
import BusUnitValueSetMessage from '../../../Base/Config/response/BusUnitValueSet';


class Update {

    /**
     * Constructor
     */
    constructor() {
        this.update = this.update.bind(this);
    }

    /**
     * Update Business Unit Value Set
     * @param req
     * @param res
     * @returns Response
     * @Update Business Unit Value Set
     */
    async update(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.body.Id, Session: req.body.Session, Token: req.body.Token }).validate();

            let busUnitValueSet = new BusUnitValueSet(req.body.busUnitValueSet);
            busUnitValueSet.paramModifiedBy(req.body.Id);
            await busUnitValueSet.connectDb();
            await busUnitValueSet.update();

            let response = new ResponseClass(
                ResStatus.Success,
                BusUnitValueSetMessage.UPDATED
            );
            response.setData({
                ...busUnitValueSet.get(),
                RecId: busUnitValueSet.paramRecId()
            });
            busUnitValueSet.flush();
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