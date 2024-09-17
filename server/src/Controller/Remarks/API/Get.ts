import { Request, Response } from 'express';
import ResStatus from '../../../Base/Config/ResStatus';
import ResponseClass from '../../../Base/Class/Response';
import CommonMessage from '../../../Base/Config/response/CommonMessage';
import UserAccess from '../../../Base/Class/UserAccess';
import Remarks from '../../../Base/Class/Remarks';
import SysTableId from '../../../Base/Class/SysTableId';
import Collections from '../../../Base/Config/collections';


class GetRemarks {

    /**
     * Constructor
     */
    constructor() {
        this.get = this.get.bind(this);
    }

    /**
     * Get
     * @param req 
     * @param res 
     */
    async get(req: Request, res: Response) {
        try {

            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            let remarks = new Remarks();
            remarks.paramRefRecId(parseInt(req.query.RefRecId as string));
            remarks.paramRefTableId(await new SysTableId().getTableId(req.query.RefTableName as string))
            await remarks.connectDb();
            let data = await remarks.getAll(Collections.Remarks, { RefRecId: remarks.paramRefRecId(), RefTableId: remarks.RefTableId });
            remarks.flush()
            let response = new ResponseClass(
                ResStatus.Success,
                CommonMessage.DataFound
            );
            response.setData(data);
            return res.status(ResStatus.Success).send(response.getResponse());
        } catch (error) {
            if (error instanceof ResponseClass) {
                return res.status(error.getStatus()).send(error.getResponse());
            }
            return res.status(ResStatus.InternalServerError).send(
                new ResponseClass(ResStatus.InternalServerError, CommonMessage.InternalServerError).getResponse()
            );
        }
    }

}

export default GetRemarks;