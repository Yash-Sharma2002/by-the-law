import { Request, Response } from "express";
import SecurityRole from "../../../Base/Class/SecurityRole";
import ResStatus from "../../../Base/Config/ResStatus";
import ResponseClass from "../../../Base/Class/Response";
import CommonMessage from "../../../Base/Config/response/CommonMessage";
import SecurityRoleMessage from "../../../Base/Config/response/SecurityRole";
import UserAccess from "../../../Base/Class/UserAccess";


class Create {

    /**
     * Constructor
     */
    constructor() {
        this.create = this.create.bind(this);
        this.add = this.add.bind(this);
    }

    /**
     * Create a new SecurityRole
     * @param req 
     * @param res 
     */
    async create(req: Request, res: Response) {
        try {
            const securityRole = new SecurityRole(req.body.securityRole);
            securityRole.validate();
            securityRole.paramCreatedBy("Admin")
            securityRole.paramModifiedBy("Admin")
            await securityRole.connectDb()
            await securityRole.checkExists();
            await securityRole.insert();

            const response = new ResponseClass(
                ResStatus.Success,
                SecurityRoleMessage.ROLE_CREATED
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

    /**
     * Add a new SecurityRole
     * @param req 
     * @param res 
     */
    async add(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.body.Id, Session: req.body.Session, Token: req.body.Token }).validate();

            const securityRole = new SecurityRole(req.body.securityRole);
            securityRole.paramCreatedBy(req.body.Id)
            securityRole.paramModifiedBy(req.body.Id)
            await securityRole.connectDb()
            await securityRole.checkExists();
            await securityRole.insert();

            const response = new ResponseClass(
                ResStatus.Success,
                SecurityRoleMessage.ROLE_CREATED
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

export default Create;