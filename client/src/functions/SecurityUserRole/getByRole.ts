import axios from "axios";
import { SecurityUserRoleAPI } from "../../config/API/SecurityUserRole";


export async function getByRole(user: { Id: string, Session: string, Token: string }, role: string) {
    try {
        const data = new URLSearchParams({
            Id: user.Id,
            Session: user.Session,
            Token: user.Token,
            Name: role
        })

        const response = await axios.get(SecurityUserRoleAPI.Role + data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;
    }
    catch (error: any) {
        return error;
    }
}