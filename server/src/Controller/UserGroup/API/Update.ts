import { Request, Response } from "express";
import CommonMessage from "../../../Base/Config/response/CommonMessage";
import UserAccess from "../../../Base/Class/UserAccess";
import UserGroup from "../../../Base/Class/UserGroup";
import ResponseClass from "../../../Base/Class/Response";
import ResStatus from "../../../Base/Config/ResStatus";
import UserGroupMessage from "../../../Base/Config/response/UserGroup";

class Update {
    constructor() {
        this.update = this.update.bind(this);
    }

    async update(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.body.Id, Session: req.body.Session, Token: req.body.Token }).validate();

            let workerGroup = new UserGroup(req.body.userGroup);
            workerGroup.paramModifiedBy(req.body.Id);
            await workerGroup.connectDb();
            await workerGroup.update();

            let response = new ResponseClass(
                ResStatus.Success,
                UserGroupMessage.UPDATED
            );
            response.setData(workerGroup.get());
            return res.status(ResStatus.Success).send(response.getResponse());
        } catch (error) {
            if (error instanceof ResponseClass) {
                return res.status(error.getStatus()).send(error.getResponse());
            }
            return res.status(ResStatus.InternalServerError)
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
