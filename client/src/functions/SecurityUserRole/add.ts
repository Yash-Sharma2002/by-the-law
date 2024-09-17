import axios from "axios";
import { SecurityUserRoleAPI } from "../../config/API/SecurityUserRole";


export async function addSecurityUserRole(user: { Id: string, Session: string, Token: string }, Id: string, role: string) {
    try {
        const data = {
            Id: user.Id,
            Session: user.Session,
            Token: user.Token,
            securityUserRole: {
                UserId: Id,
                SecurityRole: role
            }
        }

        const response = await axios.post(SecurityUserRoleAPI.Add, data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;
    }
    catch (error: any) {
        return error;
    }
}