

import axios from "axios";
import { UserAPI } from "../../config/API/User";




async function removeGroup(user: any, currentUser: { Id: string, Session: string, Token: string }) {
    try {
        const data = new URLSearchParams({
            user: user,
            Id: currentUser.Id,
            Session: currentUser.Session,
            Token: currentUser.Token
        })

        const response = await axios.delete(UserAPI.RemoveGroup+ data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;
    }
    catch (error: any) {
        return error;
    }
}

export default removeGroup;