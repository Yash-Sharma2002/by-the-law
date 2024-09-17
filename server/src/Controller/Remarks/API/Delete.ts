import { Request, Response } from 'express';
import ResStatus from '../../../Base/Config/ResStatus';
import ResponseClass from '../../../Base/Class/Response';
import CommonMessage from '../../../Base/Config/response/CommonMessage';
import UserAccess from '../../../Base/Class/UserAccess';
import Remarks from '../../../Base/Class/Remarks';
import RemarksMessage from '../../../Base/Config/response/Remarks';

class Delete{

    /** 
     * Constructor
     */
    constructor(){
        this.delete = this.delete.bind(this);
    }

    /**
     * Delete
     * @param req 
     * @param res 
     */
    async delete(req: Request, res: Response){
        try{

            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            let remarks = new Remarks();
            await remarks.connectDb();
            await remarks.delete(parseInt(req.query.RecId as string));

            let response = new ResponseClass(
                ResStatus.Success,
                RemarksMessage.Deleted
            );

            remarks.flush();
            return res.status(ResStatus.Success).send(response.getResponse());

        }catch(error){
            if(error instanceof ResponseClass){
                return res.status(error.getStatus()).send(error.getResponse());
            }
            return res.status(ResStatus.InternalServerError).send(
                new ResponseClass(ResStatus.InternalServerError, CommonMessage.InternalServerError).getResponse()
            );
        }
    }

}

export default Delete;