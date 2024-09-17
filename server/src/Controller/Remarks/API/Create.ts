import { Request, Response } from "express";
import ResStatus from "../../../Base/Config/ResStatus";
import ResponseClass from "../../../Base/Class/Response";
import CommonMessage from "../../../Base/Config/response/CommonMessage";
import UserAccess from "../../../Base/Class/UserAccess";
import Remarks from "../../../Base/Class/Remarks";
import RemarksMessage from "../../../Base/Config/response/Remarks";
import SysTableId from "../../../Base/Class/SysTableId";
import { RemarksInterface } from "../../../Base/Interface/Remarks";
import Collections from "../../../Base/Config/collections";



class CreateRemarks {

    /**
     * Contructor
     */
    constructor() {
        this.create = this.create.bind(this);
    }

    /**
     * Create
     * @param req 
     * @param res 
     */
    async create(req: Request, res: Response) {
        try {

            new UserAccess({ Id: req.body.Id, Session: req.body.Session, Token: req.body.Token }).validate();

            let remarks = new Remarks(req.body.remarks);
            remarks.paramRefRecId(req.body.Ref.RecId);
            remarks.paramRefTableId(await new SysTableId().getTableId(req.body.Ref.TableName))
            remarks.paramCreatedBy(req.body.Id);
            remarks.paramModifiedBy(req.body.Id);
            await remarks.connectDb();
            await remarks.insert();

            let response = new ResponseClass(
                ResStatus.Success,
                RemarksMessage.Created
            );
            response.setData(
                await remarks.getRemarks( remarks.paramRecId() )
            );

            remarks.flush();
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

export default CreateRemarks;