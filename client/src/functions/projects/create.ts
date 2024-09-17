import axios from "axios";
import ProjTableInterface from "../../interface/ProjTable";
import { ProjTableAPI } from "../../config/API/ProjTable";



async function createProject(project: ProjTableInterface, user: { Id: string, Session: string, Token: string }) {

    const data = {
        projTable: project,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
    }

    try {
        const response = await axios.post(ProjTableAPI.Create, data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}


export default createProject;