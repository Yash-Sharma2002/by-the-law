import axios from "axios";
import { ProjTableAPI } from "../../config/API/ProjTable";
import Roles from "../../config/enum/Roles";


async function getMyProjects(user: { Id: string, Session: string, Token: string, Roles?: string }, Id: string) {
    const data = new URLSearchParams({
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
        user: Id
    })

    try {
        const response = await axios.get(
            ( user.Roles === Roles.Lawyer ? ProjTableAPI.AssignedProjManager
                    : ProjTableAPI.Assigned)
                    + data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}


export default getMyProjects;