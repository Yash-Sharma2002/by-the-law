import axios from "axios";
import { SecurityUserRoleAPI } from "../../config/API/SecurityUserRole";


export async function deleteSecurityUserRole(user: { Id: string, Session: string, Token: string }, recId: string = "") {
    try {

        const params = new URLSearchParams({
            Id: user.Id,
            Session: user.Session,
            Token: user.Token,
            securityUserRole: recId
        });

        const response = await axios.delete(SecurityUserRoleAPI.Delete + params);

        return response.data;
    } catch (error: any) {
        return error.response ? error.response.data : error.message;
    }
}
