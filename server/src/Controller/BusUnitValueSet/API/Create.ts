import { Request, Response } from 'express';
import ResStatus from '../../../Base/Config/ResStatus';
import ResponseClass from '../../../Base/Class/Response';
import UserAccess from '../../../Base/Class/UserAccess';
import CommonMessage from '../../../Base/Config/response/CommonMessage';
import BusUnitValueSet from '../../../Base/Class/BusUnitValueSet';
import BusUnitValueSetMessage from '../../../Base/Config/response/BusUnitValueSet';

class Create {
    /**
      * Constructor
      */
    constructor() {
        this.createOne = this.createOne.bind(this);
        this.createMany = this.createMany.bind(this);
    }

    /**
    * Create Business Unit Value Set
    * @param req
    * @param res
    * @returns Response
    * @Create Business Unit Value Set
    */

    async createOne(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.body.Id, Session: req.body.Session, Token: req.body.Token }).validate();

            let busUnitValueSet = new BusUnitValueSet(req.body.busUnitValueSet);
            busUnitValueSet.paramCreatedBy(req.body.Id);
            busUnitValueSet.paramModifiedBy(req.body.Id);
            await busUnitValueSet.connectDb();
            await busUnitValueSet.insert();

            let response = new ResponseClass(
                ResStatus.Success,
                BusUnitValueSetMessage.CREATED
            );
            response.setData({ ...busUnitValueSet.get(), RecId: busUnitValueSet.paramRecId() });
            busUnitValueSet.flush();
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

    async createMany(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.body.Id, Session: req.body.Session, Token: req.body.Token }).validate();
        
            const data = req.body.data;
            const createdById = req.body.Id;

            for (const item of data) {
                let busUnitValueSet = new BusUnitValueSet(item);
                busUnitValueSet.paramCreatedBy(createdById);
                busUnitValueSet.paramModifiedBy(createdById);
                await busUnitValueSet.connectDb();
                await busUnitValueSet.insert();
                busUnitValueSet.flush();
            }

            let response = new ResponseClass(
                ResStatus.Success,
                BusUnitValueSetMessage.CREATED
            );

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
