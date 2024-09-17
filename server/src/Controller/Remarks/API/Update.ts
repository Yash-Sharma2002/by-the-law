import { Request, Response } from 'express';
import ResStatus from '../../../Base/Config/ResStatus';
import ResponseClass from '../../../Base/Class/Response';
import CommonMessage from '../../../Base/Config/response/CommonMessage';
import UserAccess from '../../../Base/Class/UserAccess';
import Remarks from '../../../Base/Class/Remarks';
import RemarksMessage from '../../../Base/Config/response/Remarks';

class Update{

    /**
     * Constructor
     */
    constructor(){
        this.update = this.update.bind(this);
    }

    /**
     * Update
     * @param req 
     * @param res 
     */
    async update(req:Request, res:Response){
        try{

            new UserAccess({ Id: req.body.Id, Session: req.body.Session, Token: req.body.Token }).validate();

            let remarks = new Remarks(req.body.remarks);
            remarks.paramModifiedBy(req.body.Id);
            await remarks.connectDb();
            await remarks.update();

            let response = new ResponseClass(
                ResStatus.Success,
                RemarksMessage.Updated
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

export default Update;