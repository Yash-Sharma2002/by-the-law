import { Request, Response } from 'express';
import ResStatus from '../../../Base/Config/ResStatus';
import ResponseClass from '../../../Base/Class/Response';
import UserAccess from '../../../Base/Class/UserAccess';
import CommonMessage from '../../../Base/Config/response/CommonMessage';
import BusUnitValueSet from '../../../Base/Class/BusUnitValueSet';
import BusUnitValueSetMessage from '../../../Base/Config/response/BusUnitValueSet';


class Delete{

    /**
     * Constructor
     */
    constructor() {
        this.delete = this.delete.bind(this);
    }

    /**
     * Delete 
     * @param req
     * @param res
     * @returns Response
     * @Delete 
     */
    async delete(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            let clt = new BusUnitValueSet();
            clt.paramRecId(parseInt(req.query.busUnitValueSet as string));
            await clt.connectDb();
            await clt.delete();
            clt.flush();

            return res.status(ResStatus.Success).send(
                new ResponseClass(
                    ResStatus.Success,
                    BusUnitValueSetMessage.DELETED
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

export default Delete; 