import { Request, Response } from 'express';
import ResStatus from '../../../Base/Config/ResStatus';
import ResponseClass from '../../../Base/Class/Response';
import UserAccess from '../../../Base/Class/UserAccess';
import CommonMessage from '../../../Base/Config/response/CommonMessage';
import Collections from '../../../Base/Config/collections';
import BusUnitValueSet from '../../../Base/Class/BusUnitValueSet';
import { EmptyBusUnitValueSet } from '../../../Base/Interface/BusUnitValueSet';


class Get {

    /**
     * Constructor 
     */
    constructor() {
        this.getOne = this.getOne.bind(this);
        this.getAll = this.getAll.bind(this);
        this.getAllByUnit = this.getAllByUnit.bind(this);
    }

    /**
     * Get Business Unit Value Set
     * @param req
     * @param res
     * @returns Response
     * @Get 
     */
    async getOne(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            let clt = new BusUnitValueSet();
            clt.paramRecId(parseInt(req.query.busUnitValueSet as string));
            await clt.connectDb();
            let address = await clt.getWithColumns(Collections.BusUnitValueSet, { RecId: clt.paramRecId() }, ["UnitName", "ValueSet", "RecId", "CreatedBy", "CreatedDateTime", "ModifiedBy", "ModifiedDateTime"])
            let response = new ResponseClass(
                ResStatus.Success,
                CommonMessage.DataFound
            );
            response.setData(clt.get());
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
     * Get All Business Unit Value Set
     * @param req
     * @param res
     * @returns Response
     * @Get 
     */
    async getAll(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            let clt = new BusUnitValueSet();
            await clt.connectDb();
            let busUnitValueSet = await clt.getAllWithColumns(Collections.BusUnitValueSet, {}, {
                "UnitName":1, "ValueSet":1, "RecId":1, "CreatedBy":1, "CreatedDateTime":1, "ModifiedBy":1, "ModifiedDateTime":1
            })
            let response = new ResponseClass(
                ResStatus.Success,
                CommonMessage.DataFound
            );

            response.setData(busUnitValueSet);
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
     * Get Details
     * @param req
     * @param res
     * @returns Response
     * @Get 
     */
    async getAllByUnit(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            let clt = new BusUnitValueSet();
            await clt.connectDb();
            let busUnitValueSet = await clt.getAll(Collections.BusUnitValueSet, { UnitName: req.query.UnitName as string })
            let response = new ResponseClass(
                ResStatus.Success,
                CommonMessage.DataFound
            );

            response.setData(busUnitValueSet);
            clt.flush();
            return res.status(ResStatus.Success).send(response.getResponse());
        } catch (error) {
            if (error instanceof ResponseClass) {
                return res.status(error.getStatus()).send(error.getResponse());
            }
            return res.status(ResStatus.InternalServerError).send(new ResponseClass(ResStatus.InternalServerError, CommonMessage.InternalServerError).getResponse());
        }
    }
}

export default Get;