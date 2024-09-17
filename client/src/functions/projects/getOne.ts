import axios from "axios";
import { ProjTableAPI } from "../../config/API/ProjTable";


async function getOneProject(user: { Id: string, Session: string, Token: string }, RecId: string) {

    const data = new URLSearchParams({
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
        projTable: RecId,
    })

    try {
        const response = await axios.get(ProjTableAPI.GetOne + data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}


export default getOneProject;