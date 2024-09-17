import axios from "axios";
import { UserGroupAPI } from "../../config/API/UserGroup";



export default async function createUserGroup(user:{Id:string,Session:string,Token:string},userGroup:{Name:string,Description:string}) {

  
    const data = {
        userGroup: userGroup,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token
    }

    try {
        const response = await axios.post(UserGroupAPI.Create, data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}

