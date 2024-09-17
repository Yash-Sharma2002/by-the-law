import { Request, Response } from 'express';
import ResStatus from '../../../Base/Config/ResStatus';
import ResponseClass from '../../../Base/Class/Response';
import UserAccess from '../../../Base/Class/UserAccess';
import CommonMessage from '../../../Base/Config/response/CommonMessage';
import CustGroup from '../../../Base/Class/CustGroup';
import CustGroupMessage from '../../../Base/Config/response/CustGroup';

class Create {

    /**
     * Constructor
     */
    constructor() {
        this.create = this.create.bind(this);
    }

    /**
     * Create Address
     * @param req
     * @param res
     * @returns Response
     * @Create Address
     */
    async create(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.body.Id, Session: req.body.Session, Token: req.body.Token }).validate();

            let address = new CustGroup(req.body.custGroup);
            address.paramCreatedBy(req.body.Id);
            address.paramModifiedBy(req.body.Id);
            await address.connectDb();
            await address.insert();

            let response = new ResponseClass(
                ResStatus.Success,
                CustGroupMessage.CREATED
            );
            response.setData({ ...address.get(), RecId: address.paramRecId() });
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

export default Create;