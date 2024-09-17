import { Request, Response } from 'express';
import ResStatus from '../../../Base/Config/ResStatus';
import ResponseClass from '../../../Base/Class/Response';
import UserAccess from '../../../Base/Class/UserAccess';
import CommonMessage from '../../../Base/Config/response/CommonMessage';
import CustGroup from '../../../Base/Class/CustGroup';
import CustGroupMessage from '../../../Base/Config/response/CustGroup';


class Update {

    /**
     * Constructor
     */
    constructor() {
        this.update = this.update.bind(this);
    }

    /**
     * Update Address
     * @param req
     * @param res
     * @returns Response
     * @Update Address
     */
    async update(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.body.Id, Session: req.body.Session, Token: req.body.Token }).validate();

            let address = new CustGroup(req.body.custGroup);
            address.paramModifiedBy(req.body.Id);
            await address.connectDb();
            await address.update();

            let response = new ResponseClass(
                ResStatus.Success,
                CustGroupMessage.UPDATED
            );
            response.setData({
                ...address.get(),
                RecId: address.paramRecId()
            });
            address.flush();
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