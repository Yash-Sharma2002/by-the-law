import { Request, Response } from "express";
import UserAccess from "../../../Base/Class/UserAccess";
import Collections from "../../../Base/Config/collections";
import ResponseClass from "../../../Base/Class/Response";
import ResStatus from "../../../Base/Config/ResStatus";
import CommonMessage from "../../../Base/Config/response/CommonMessage";
import SecurityUserRoleMessage from "../../../Base/Config/response/SecurityUserRole";
import SecurityUserRole from "../../../Base/Class/SecurityUserRole";


class Get {

    /**
     * Constructor
     */
    constructor() {
        this.getOne = this.getOne.bind(this);
        this.getAll = this.getAll.bind(this);
        this.getByRole = this.getByRole.bind(this);
    }

    /**
     * Get a single SecurityRole
     * @param req 
     * @param res 
     */
    async getOne(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            const securityRole = new SecurityUserRole();
            await securityRole.connectDb();
            let role = await securityRole.getOne(Collections.SecurityUser, { UserId: req.query.UserId as string });

            securityRole.flush();
            let response = new ResponseClass(
                ResStatus.Success,
                SecurityUserRoleMessage.USER_ROLE_Found
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

            const securityRole = new SecurityUserRole();
            await securityRole.connectDb();
            let roles = await securityRole.getAll(Collections.SecurityUser, { UserId: req.query.UserId as string });
            securityRole.flush();

            let response = new ResponseClass(
                ResStatus.Success,
                SecurityUserRoleMessage.USER_ROLE_Found
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

    /**
     * Get all SecurityRoles by Role
     * @param req 
     * @param res 
     */
    async getByRole(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();
            
            const securityRole = new SecurityUserRole();
            await securityRole.connectDb();
            let roles = await securityRole.getAllWithColumns(Collections.SecurityUser, { Name: req.query.Name as string },["UserId","UserName","UserRecId"]);
            securityRole.flush();

            let response = new ResponseClass(
                ResStatus.Success,
                SecurityUserRoleMessage.USER_ROLE_Found
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