import { Request, Response } from "express";
import ResponseClass from "../../../Base/Class/Response";
import UserAccess from "../../../Base/Class/UserAccess";
import CommonMessage from "../../../Base/Config/response/CommonMessage";
import ResStatus from "../../../Base/Config/ResStatus";
import Client from "../../../Base/Class/Client";
import Collections from "../../../Base/Config/collections";
import Start from "../../../Base/Class/Start";
import Location from '../../../Base/Class/Location';
import SysTableId from '../../../Base/Class/SysTableId';
import { LocationInterface } from "../../../Base/Interface/Location";


class GetClients {


    /**
     * Constructor
     */
    constructor() {
        this.getOne = this.getOne.bind(this);
        this.getAll = this.getAll.bind(this);
        this.getByManager = this.getByManager.bind(this);
        this.getProfile = this.getProfile.bind(this);
    }

    /**
     * Get One Client
     * @param req 
     * @param res 
     */
    async getOne(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            const client = new Client();
            client.paramRecId(parseInt(req.query.custTable as string));
            await client.connectDb();
            let data = await client.getOne(Collections.Client, { RecId: client.paramRecId() });
            client.flush();

            let response = new ResponseClass(
                ResStatus.Success,
                CommonMessage.DataFound
            );
            response.setData(data);
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
     * Get All Clients
     * @param req 
     * @param res 
     */
    async getAll(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            const client = new Client();
            await client.connectDb();
            let data = await client.getAll(Collections.Client, {});
            client.flush();

            let response = new ResponseClass(
                ResStatus.Success,
                CommonMessage.DataFound
            );
            response.setData(data);
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
     * Get Clients by Manager
     * @param req 
     * @param res 
     */
    async getByManager(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            const client = new Client();
            await client.connectDb();
            let data = await client.getAll(Collections.Client, { ManagerId: req.query.Id as string });
            client.flush();

            let response = new ResponseClass(
                ResStatus.Success,
                CommonMessage.DataFound
            );
            response.setData(data);
            return res.status(ResStatus.Success).send(response.getResponse());
        }
        catch (error) {
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
    * Get Client Profile and Address
    * @param req 
    * @param res 
    */


    async getProfile(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            const client = new Client();
            client.paramRecId(parseInt(req.query.RefRecId as string));
            await client.connectDb();
            let user = await client.getOne(Collections.Client, { RecId: client.paramRecId() });
            client.flush();

            let clt = new Location();
            clt.paramRefRecId(parseInt(req.query.RefRecId as string));
            clt.paramRefTableId(await new SysTableId().getTableId(req.query.RefTableName as string))
            await clt.connectDb();
            let address: LocationInterface[] = (await clt.getAllWithColumns(Collections.Location, { RefRecId: clt.paramRefRecId(), RefTableId: clt.paramRefTableId() }, {
                "Address": 1, "IsPrimary": 1, "RecId": 1, "ZipCode": 1, "State": 1, "Country": 1, "City": 1, "Street": 1, "District": 1
            })) as unknown as LocationInterface[]

            let response = new ResponseClass(
                ResStatus.Success,
                CommonMessage.DataFound
            );

            const data = { user, address };
            response.setData(data);
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

export default GetClients;