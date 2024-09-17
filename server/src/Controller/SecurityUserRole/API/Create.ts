import { Request, Response } from "express";
import ResStatus from "../../../Base/Config/ResStatus";
import ResponseClass from "../../../Base/Class/Response";
import CommonMessage from "../../../Base/Config/response/CommonMessage";
import UserAccess from "../../../Base/Class/UserAccess";
import SecurityUserRole from "../../../Base/Class/SecurityUserRole";
import SecurityUserRoleMessage from "../../../Base/Config/response/SecurityUserRole";
import Collections from "../../../Base/Config/collections";


class Create {

    /**
     * Constructor
     */
    constructor() {
        this.create = this.create.bind(this);
        this.add = this.add.bind(this);
    }

    /**
     * Create a new SecurityUserRole
     * @param req 
     * @param res 
     */
    async create(req: Request, res: Response) {
        try {
            const securityUserRole = new SecurityUserRole(req.body.securityUserRole);
            securityUserRole.validate();
            securityUserRole.paramCreatedBy("Admin")
            securityUserRole.paramModifiedBy("Admin")
            await securityUserRole.connectDb()
            await securityUserRole.checkExists();
            await securityUserRole.insert();

            const response = new ResponseClass(
                ResStatus.Success,
                SecurityUserRoleMessage.USER_ROLE_CREATED
            );

            response.setData(securityUserRole.get());

            securityUserRole.flush();
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
     * Add a new SecurityUserRole
     * @param req 
     * @param res 
     */
    async add(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.body.Id, Session: req.body.Session, Token: req.body.Token }).validate();

            const securityUserRole = new SecurityUserRole(req.body.securityUserRole);
            securityUserRole.paramCreatedBy(req.body.Id)
            securityUserRole.paramModifiedBy(req.body.Id)
            await securityUserRole.connectDb()
            await securityUserRole.checkExists();
            await securityUserRole.insert();

            const response = new ResponseClass(
                ResStatus.Success,
                SecurityUserRoleMessage.USER_ROLE_CREATED
            );
            response.setData( await securityUserRole.getOne(Collections.SecurityUser, { RecId: securityUserRole.paramRecId()}));

            securityUserRole.flush();
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