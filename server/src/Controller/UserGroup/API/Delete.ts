import { Request, Response } from 'express';
import CommonMessage from "../../../Base/Config/response/CommonMessage";
import UserAccess from "../../../Base/Class/UserAccess";
import UserGroup from "../../../Base/Class/UserGroup";
import ResponseClass from "../../../Base/Class/Response";
import ResStatus from "../../../Base/Config/ResStatus";
import UserGroupMessage from "../../../Base/Config/response/UserGroup";


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

            let clt = new UserGroup();
            clt.paramRecId(parseInt(req.query.userGroup as string));
            await clt.connectDb();
            await clt.delete();
            clt.flush();

            return res.status(ResStatus.Success).send(
                new ResponseClass(
                    ResStatus.Success,
                    UserGroupMessage.DELETED
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