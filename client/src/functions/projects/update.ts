import axios from "axios";
import { ProjTableAPI } from "../../config/API/ProjTable";


export default async function updateProject(project: any, user: { Id: string, Session: string, Token: string }) {

    const data = {
        projTable: project,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
    }

    try {
        const response = await axios.put(ProjTableAPI.Update, data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}




