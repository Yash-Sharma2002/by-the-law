import { Request, Response } from "express";
import UserAccess from "../../../Base/Class/UserAccess";
import ResponseClass from "../../../Base/Class/Response";
import ResStatus from "../../../Base/Config/ResStatus";
import CommonMessage from "../../../Base/Config/response/CommonMessage";
import ProjTable from "../../../Base/Class/ProjTable";
import Collections from "../../../Base/Config/collections";



class GetProjects {

    /**
     * Constructor
     */
    constructor() {
        this.getOne = this.getOne.bind(this);
        this.getAll = this.getAll.bind(this);
        this.getByProjManager = this.getByProjManager.bind(this);
        // this.getAssignedProjects = this.getAssignedProjects.bind(this);
    }

    /**
     * Get One Project
     * @param req
     * @param res
     */
    async getOne(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            const project = new ProjTable();
            project.paramRecId(parseInt(req.query.projTable as string));    
            await project.connectDb();
            await project.checkNotExists();
            let projectDetails = await project.getOne(Collections.ProjTable, { RecId: project.paramRecId() });
            let response = new ResponseClass(
                ResStatus.Success,
                CommonMessage.DataFound
            );
            response.setData(projectDetails);
            return res.status(ResStatus.Success).json(response.getResponse());
        } catch (error) {
            if (error instanceof ResponseClass) {
                return res.status(error.getStatus()).json(error.getResponse());
            }
            return res
                .status(ResStatus.InternalServerError)
                .json(
                    new ResponseClass(
                        ResStatus.InternalServerError,
                        CommonMessage.InternalServerError
                    ).getResponse()
                );
        }
    }

    /**
     * Get All Projects
     * @param req
     * @param res
     */
    async getAll(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            const project = new ProjTable();
            await project.connectDb();
            let projectDetails = await project.getAll(Collections.ProjTable,{});
            let response = new ResponseClass(
                ResStatus.Success,
                CommonMessage.DataFound
            );
            response.setData(projectDetails);
            return res.status(ResStatus.Success).json(response.getResponse());
        } catch (error) {
            if (error instanceof ResponseClass) {
                return res.status(error.getStatus()).json(error.getResponse());
            }
            return res
                .status(ResStatus.InternalServerError)
                .json(
                    new ResponseClass(
                        ResStatus.InternalServerError,
                        CommonMessage.InternalServerError
                    ).getResponse()
                );
        }
    }

    /**
     * Get Projects By Project Manager
     * @param req
     * @param res
     */
    async getByProjManager(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            const project = new ProjTable();
            await project.connectDb();
            let projectDetails = await project.getAll(Collections.ProjTable, { ProjManagerId: req.query.user as string });
            let response = new ResponseClass(
                ResStatus.Success,
                CommonMessage.DataFound
            );
            response.setData(projectDetails);
            return res.status(ResStatus.Success).json(response.getResponse());
        } catch (error) {
            if (error instanceof ResponseClass) {
                return res.status(error.getStatus()).json(error.getResponse());
            }
            return res
                .status(ResStatus.InternalServerError)
                .json(
                    new ResponseClass(
                        ResStatus.InternalServerError,
                        CommonMessage.InternalServerError
                    ).getResponse()
                );
        }
    }

    // #TODO
    /**
     * Get Assigned Projects
     * @param req
     * @param res
     */
    async getAssignedProjects(req: Request, res: Response) {
        try {
            new UserAccess({ Id: req.query.Id as string, Session: req.query.Session as string, Token: req.query.Token as string }).validate();

            const project = new ProjTable();
            await project.connectDb();
            let projectDetails = await project.getAll(Collections.ProjEmplSetup, { Id: req.query.user as string });
            let response = new ResponseClass(
                ResStatus.Success,
                CommonMessage.DataFound
            );
            response.setData(projectDetails);
            return res.status(ResStatus.Success).json(response.getResponse());
        } catch (error) {
            if (error instanceof ResponseClass) {
                return res.status(error.getStatus()).json(error.getResponse());
            }
            return res
                .status(ResStatus.InternalServerError)
                .json(
                    new ResponseClass(
                        ResStatus.InternalServerError,
                        CommonMessage.InternalServerError
                    ).getResponse()
                );
        }
    }
}


export default GetProjects;