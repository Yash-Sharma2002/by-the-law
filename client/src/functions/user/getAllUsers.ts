import axios from "axios";
import { UserAPI } from "../../config/API/User";


async function getAllUsers(user: { Id: string, Session: string, Token: string }) {

    const data = new URLSearchParams({
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
    })

    try {
        const response = await axios.get(UserAPI.Get+ data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }    
}


export default getAllUsers;