import { Request, Response } from "express";
import CommonMessage from "../../../Base/Config/response/CommonMessage";
import UserAccess from "../../../Base/Class/UserAccess";
import UserGroup from "../../../Base/Class/UserGroup";
import ResponseClass from "../../../Base/Class/Response";
import ResStatus from "../../../Base/Config/ResStatus";
import UserGroupMessage from "../../../Base/Config/response/UserGroup";
import Collections from "../../../Base/Config/collections";

class Get {
    constructor() {
        this.getOne = this.getOne.bind(this);
        this.getAll = this.getAll.bind(this);
    }

    async getOne(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            let workerGroup = new UserGroup();
            workerGroup.paramRecId(parseInt(req.query.userGroup as string));
            await workerGroup.connectDb();
            let data = await workerGroup.getOne(Collections.UserGroup, { RecId: workerGroup.paramRecId() });

            let response = new ResponseClass(
                ResStatus.Success,
                UserGroupMessage.FOUND
            );

            response.setData({ ...data, RecId: workerGroup.paramRecId() });

            workerGroup.flush();
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

    async getByName(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            let workerGroup = new UserGroup();
            workerGroup.paramName(req.query.userGroup as string);
            await workerGroup.connectDb();
            let data = await workerGroup.getOne(Collections.UserGroup, { Name: workerGroup.paramName() });

            let response = new ResponseClass(
                ResStatus.Success,
                UserGroupMessage.FOUND
            );

            response.setData({ ...data, RecId: workerGroup.paramRecId() });

            workerGroup.flush();
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

    async getAll(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();


            let clt = new UserGroup();
            await clt.connectDb();
            let data = await clt.getAllWithColumns(Collections.UserGroup, {}, {
                "Name": 1, "Description": 1, "RecId": 1, "CreatedBy": 1, "CreatedDateTime": 1, "ModifiedBy": 1, "ModifiedDateTime": 1
            })

            let response = new ResponseClass(
                ResStatus.Success,
                UserGroupMessage.FOUND
            );
            response.setData(data);
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

export default Get;
