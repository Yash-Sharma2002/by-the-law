import express from 'express';
import CreateRemarks from '../API/Create';
import Delete from '../API/Delete';
import Update from '../API/Update';
import GetRemarks from '../API/Get';




const RemarksRouter = express.Router();

RemarksRouter.get('/', new GetRemarks().get);
RemarksRouter.post('/add', new CreateRemarks().create);
RemarksRouter.delete('/delete', new Delete().delete);
RemarksRouter.put('/update', new Update().update);


export default RemarksRouter;