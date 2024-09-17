import axios from "axios";
import { UserGroupAPI } from "../../config/API/UserGroup";


export default async function deleteUserGroup(user:{Id:string,Session:string,Token:string},userGroup:string) {
    
  
    const data = new URLSearchParams({
        userGroup: userGroup,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token
    })

    try {
        const response = await axios.delete(UserGroupAPI.Delete+ data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
    
}