import { Request, Response } from 'express';
import ResStatus from '../../../Base/Config/ResStatus';
import ResponseClass from '../../../Base/Class/Response';
import SequenceFields from '../../../Base/Config/response/Sequence';
import CommonMessage from '../../../Base/Config/response/CommonMessage';
import UserAccess from '../../../Base/Class/UserAccess';
import Sequence from '../../../Base/Class/Sequence';
import SecurityUserRole from '../../../Base/Class/SecurityUserRole';
import SysTableId from '../../../Base/Class/SysTableId';
import Collections from '../../../Base/Config/collections';


class CreateSequence {

    /**
     * Contructor
     */
    constructor() {
        this.create = this.create.bind(this);
    }

    /**
     * Create Sequence
     * @param req
     * @param res
     * @returns Response
     * @Create Sequence
     */
    async create(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.body.Id as string, Session: req.body.Session as string, Token: req.body.Token as string }).validate();
            await new SecurityUserRole().checkAdmin(req.body.Id);

            let sequence = new Sequence(req.body.sequence);
            sequence.paramCreatedBy(req.body.Id);
            sequence.paramModifiedBy(req.body.Id);
            await sequence.connectDb();
            await sequence.checkExist();
            await sequence.insert();

            let response = new ResponseClass(
                ResStatus.Success,
                SequenceFields.SequenceCreated
            );
            response.setData(await sequence.getOne(Collections.SequenceFull, { Name: sequence.paramName() }));
            sequence.flush();
            return res
                .status(ResStatus.Success)
                .send(response.getResponse());
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

export default CreateSequence;