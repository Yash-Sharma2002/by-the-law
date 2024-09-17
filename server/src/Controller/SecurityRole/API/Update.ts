import { Request, Response } from "express";
import SecurityRole from "../../../Base/Class/SecurityRole";
import UserAccess from "../../../Base/Class/UserAccess";
import ResponseClass from "../../../Base/Class/Response";
import ResStatus from "../../../Base/Config/ResStatus";
import SecurityRoleMessage from "../../../Base/Config/response/SecurityRole";
import CommonMessage from "../../../Base/Config/response/CommonMessage";


class Update {

    /**
     * Constructor
     */
    constructor() {
        this.edit = this.edit.bind(this);
    }

    /**
     * Edit a SecurityRole
     * @param req 
     * @param res 
     */
    async edit(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.body.Id, Session: req.body.Session, Token: req.body.Token }).validate();
            const securityRole = new SecurityRole(req.body.securityRole);
            securityRole.paramModifiedBy(req.body.Id)
            await securityRole.connectDb();
            await securityRole.update();

            const response = new ResponseClass(
                ResStatus.Success,
                SecurityRoleMessage.ROLE_UPDATED
            );

            response.setData(securityRole.get());
            securityRole.flush();
            return res.status(ResStatus.Success).send(response.getResponse());
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

export default Update;