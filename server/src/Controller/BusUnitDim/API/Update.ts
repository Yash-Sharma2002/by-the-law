import { Request, Response } from 'express';
import ResStatus from '../../../Base/Config/ResStatus';
import ResponseClass from '../../../Base/Class/Response';
import UserAccess from '../../../Base/Class/UserAccess';
import BusUnitDim from '../../../Base/Class/BusUnitDim';
import BusUnitDimMessage from '../../../Base/Config/response/BusUnitDim';
import CommonMessage from '../../../Base/Config/response/CommonMessage';


class Update {

    /**
     * Constructor
     */
    constructor() {
        this.update = this.update.bind(this);
    }

    /**
     * Update Business Unit Dimension
     * @param req
     * @param res
     * @returns Response
     * @Update Business Unit Dimension
     */
    async update(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.body.Id, Session: req.body.Session, Token: req.body.Token }).validate();

            let busUnitDim = new BusUnitDim(req.body.busUnitDim);
            busUnitDim.validate();
            busUnitDim.paramModifiedBy(req.body.Id);
            await busUnitDim.connectDb();
            await busUnitDim.update();

            let response = new ResponseClass(
                ResStatus.Success,
                BusUnitDimMessage.UPDATED
            );
            response.setData({
                ...busUnitDim.get(),
                RecId: busUnitDim.paramRecId()
            });
            busUnitDim.flush();
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