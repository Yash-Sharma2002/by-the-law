

import axios from "axios";
import { ProjTableAPI } from "../../config/API/ProjTable";


async function deleteProject(custTable: any, currentUser: { Id: string, Session: string, Token: string }) {
    try {
        const data = new URLSearchParams({
            projTable: custTable,
            Id: currentUser.Id,
            Session: currentUser.Session,
            Token: currentUser.Token
        })

        const response = await axios.delete(ProjTableAPI.Delete+ data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;
    }
    catch (error: any) {
        return error;
    }
}

export default deleteProject;