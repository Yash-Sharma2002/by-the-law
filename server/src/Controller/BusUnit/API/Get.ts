import { Request, Response } from 'express';
import ResStatus from '../../../Base/Config/ResStatus';
import ResponseClass from '../../../Base/Class/Response';
import UserAccess from '../../../Base/Class/UserAccess';
import CommonMessage from '../../../Base/Config/response/CommonMessage';
import Collections from '../../../Base/Config/collections';
import BusUnit from '../../../Base/Class/BusUnit';


class Get {

    /**
     * Constructor 
     */
    constructor() {
        this.getOne = this.getOne.bind(this);
        this.getAll = this.getAll.bind(this);
    }

    /**
     * Get Business Unit 
     * @param req
     * @param res
     * @returns Response
     * @Get 
     */
    async getOne(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            let clt = new BusUnit();
            clt.paramRecId(parseInt(req.query.busUnit as string));
            await clt.connectDb();
            let address = await clt.getWithColumns(Collections.BusUnit, { RecId: clt.paramRecId() }, {
                "Name":1, "Description":1, "RecId":1, "CreatedBy":1, "CreatedDateTime":1, "ModifiedBy":1, "ModifiedDateTime":1
            })
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
     * Get All Business Units
     * @param req
     * @param res
     * @returns Response
     * @Get 
     */
    async getAll(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            let clt = new BusUnit();
            await clt.connectDb();
            let busUnit = await clt.getAllWithColumns(Collections.BusUnit, {}, {
                "Name":1, "Description":1, "RecId":1, "CreatedBy":1, "CreatedDateTime":1, "ModifiedBy":1, "ModifiedDateTime":1
            })
            let response = new ResponseClass(
                ResStatus.Success,
                CommonMessage.DataFound
            );

            response.setData(busUnit);
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