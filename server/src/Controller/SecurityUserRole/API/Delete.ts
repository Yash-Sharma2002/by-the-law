import { Request, Response } from "express";
import ResponseClass from "../../../Base/Class/Response";
import ResStatus from "../../../Base/Config/ResStatus";
import UserAccess from "../../../Base/Class/UserAccess";
import CommonMessage from "../../../Base/Config/response/CommonMessage";
import SecurityUserRole from "../../../Base/Class/SecurityUserRole";
import SecurityUserRoleMessage from "../../../Base/Config/response/SecurityUserRole";


class Delete {

    /**
     * Constructor
     */
    constructor() {
        this.remove = this.remove.bind(this);
    }

    /**
     * Remove SecurityRole
     * @param req 
     * @param res 
     */
    async remove(req: Request, res: Response) {
        try {

            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            const securityRole = new SecurityUserRole();
            securityRole.paramRecId(parseInt(req.query.securityUserRole as string));
            await securityRole.connectDb();
            await securityRole.delete();

            const response = new ResponseClass(
                ResStatus.Success,
                SecurityUserRoleMessage.USER_ROLE_DELETED
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

export default Delete