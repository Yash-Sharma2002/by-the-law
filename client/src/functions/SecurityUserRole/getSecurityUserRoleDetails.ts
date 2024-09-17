import axios from "axios";
import { SecurityUserRoleAPI } from "../../config/API/SecurityUserRole";

async function getSecurityUserRoleDetails(user: { Id: string, Session: string, Token: string },recId:string="") {

    const data = new URLSearchParams({
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
        UserId:recId
        
    })

    try {
        const response = await axios.get(SecurityUserRoleAPI.GetAll + data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}


export default getSecurityUserRoleDetails;