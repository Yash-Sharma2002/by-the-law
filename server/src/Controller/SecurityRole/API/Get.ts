import { Request, Response } from "express";
import SecurityRole from "../../../Base/Class/SecurityRole";
import UserAccess from "../../../Base/Class/UserAccess";
import Collections from "../../../Base/Config/collections";
import ResponseClass from "../../../Base/Class/Response";
import ResStatus from "../../../Base/Config/ResStatus";
import SecurityRoleMessage from "../../../Base/Config/response/SecurityRole";
import CommonMessage from "../../../Base/Config/response/CommonMessage";
import { EmptySecurityRole } from "../../../Base/Interface/SecurityRole";


class Get {

    /**
     * Constructor
     */
    constructor() {
        this.getOne = this.getOne.bind(this);
        this.getAll = this.getAll.bind(this);
    }

    /**
     * Get a single SecurityRole
     * @param req 
     * @param res 
     */
    async getOne(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            const securityRole = new SecurityRole();
            securityRole.validateId(req.query.securityRole as string)
            securityRole.paramRecId(parseInt(req.query.securityRole as string));
            await securityRole.connectDb();
            let role = await securityRole.getOne(Collections.SecurityRole, { RecId: securityRole.paramRecId() });
            securityRole.flush();
            let response = new ResponseClass(
                ResStatus.Success,
                SecurityRoleMessage.ROLE_FOUND
            )
            response.setData(role);
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


    /**
     * Get all SecurityRoles
     * @param req 
     * @param res 
     */
    async getAll(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            const securityRole = new SecurityRole();
            await securityRole.connectDb();
            let roles = await securityRole.getAllWithColumns(Collections.SecurityRole, {},{
                "Name":1,"Description":1,"RecId":1,"CreatedBy":1,"CreatedDateTime":1,"ModifiedBy":1,"ModifiedDateTime":1
            });
            securityRole.flush();

            let response = new ResponseClass(
                ResStatus.Success,
                SecurityRoleMessage.ROLE_FOUND
            )
            response.setData(roles);
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


export default Get;