import { Request, Response } from 'express';
import ResStatus from '../../../Base/Config/ResStatus';
import ResponseClass from '../../../Base/Class/Response';
import UserAccess from '../../../Base/Class/UserAccess';
import BusUnitDim from '../../../Base/Class/BusUnitDim';
import CommonMessage from '../../../Base/Config/response/CommonMessage';
import Collections from '../../../Base/Config/collections';
import SysTableId from '../../../Base/Class/SysTableId';
import { EmptyBusUnitDim } from '../../../Base/Interface/BusUnitDim';


class Get {

    /**
     * Constructor 
     */
    constructor() {
        this.getOne = this.getOne.bind(this);
        this.getAll = this.getAll.bind(this);
        this.getAllByRef = this.getAllByRef.bind(this);
    }

    /**
     * Get All Business Unit Dimension
     * @param req
     * @param res
     * @returns Response
     * @Get 
     */
    async getAll(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            let clt = new BusUnitDim();
            clt.paramRecId(parseInt(req.query.BusUnitDim as string));
            await clt.connectDb();
            let busUnitDim = await clt.getWithColumns(Collections.BusUnitDim, {}, ["UnitName", "Value", "RecId", "CreatedBy", "CreatedDateTime", "ModifiedBy", "ModifiedDateTime"])
            let response = new ResponseClass(
                ResStatus.Success,
                CommonMessage.DataFound
            );
            response.setData(busUnitDim);
            clt.flush();
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
     * Get One Business Unit Dimension 
     * @param req
     * @param res
     * @returns Response
     * @Get 
     */
    async getOne(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            let clt = new BusUnitDim();
            clt.paramRecId(parseInt(req.query.busUnitDim as string));
            await clt.connectDb();
            let busUnitDim = await clt.getOne(Collections.BusUnitDim, { RecId: clt.paramRecId() })
            let response = new ResponseClass(
                ResStatus.Success,
                CommonMessage.DataFound
            );

            response.setData(busUnitDim);
            clt.flush();
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
     * Get All By Ref
     * @param req
     * @param res
     * @returns Response
     * @Get 
     */
    async getAllByRef(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            let clt = new BusUnitDim();
            clt.paramRefRecId(parseInt(req.query.RefRecId as string));
            clt.paramRefTableId(await new SysTableId().getTableId(req.query.RefTableName as string))
            await clt.connectDb();
            let busUnitDim = await clt.getAllWithColumns(Collections.BusUnitDim, { RefRecId: clt.paramRefRecId(), RefTableId: clt.paramRefTableId() }, {
                "UnitName":1, "Value":1, "RecId":1
            })
            let response = new ResponseClass(
                ResStatus.Success,
                CommonMessage.DataFound
            );
            response.setData(busUnitDim);
            clt.flush();
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