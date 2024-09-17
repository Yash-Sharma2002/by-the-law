import axios from "axios";
import { ProjTableAPI } from "../../config/API/ProjTable";

async function getAllProjects(user: { Id: string, Session: string, Token: string }) {

    const data = new URLSearchParams({
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
    })

    try {
        const response = await axios.get(ProjTableAPI.GetAll+ data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }    
}


export default getAllProjects;