import axios from "axios";
import { UserAPI } from "../../config/API/User";

async function getUsersDetails(user: { Id: string, Session: string, Token: string },recId:string="") {

    const data = new URLSearchParams({
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
        user:recId
        
    })

    try {
        const response = await axios.get(UserAPI.GetUserDetails + data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}


export default getUsersDetails;