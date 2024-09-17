import { Request, Response } from 'express';
import ResStatus from '../../../Base/Config/ResStatus';
import ResponseClass from '../../../Base/Class/Response';
import UserAccess from '../../../Base/Class/UserAccess';
import BusUnitDim from '../../../Base/Class/BusUnitDim';
import BusUnitDimMessage from '../../../Base/Config/response/BusUnitDim';
import CommonMessage from '../../../Base/Config/response/CommonMessage';
import SysTableId from '../../../Base/Class/SysTableId';

class Create {

    /**
     * Constructor
     */
    constructor() {
        this.create = this.create.bind(this);
    }

    /**
     * Create Business Unit Dimension
     * @param req
     * @param res
     * @returns Response
     * @Create Business Unit Dimension
     */
    async create(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.body.Id, Session: req.body.Session, Token: req.body.Token }).validate();

            let busUnitDim = new BusUnitDim(req.body.busUnitDim);
            busUnitDim.paramRefTableId(await new SysTableId().getTableId(req.body.Ref.TableName))
            busUnitDim.paramRefRecId(req.body.Ref.RecId)
            busUnitDim.paramCreatedBy(req.body.Id);
            busUnitDim.paramModifiedBy(req.body.Id);
            await busUnitDim.connectDb();
            await busUnitDim.insert();

            let response = new ResponseClass(
                ResStatus.Success,
                BusUnitDimMessage.CREATED
            );
            response.setData({ ...busUnitDim.getBusUnitDim(), RecId: busUnitDim.paramRecId() });
            busUnitDim.flush();
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

export default Create;