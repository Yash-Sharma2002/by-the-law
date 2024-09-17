import axios from "axios";
import { CustGroupAPI } from "../../config/API/CustGroup";

export default async function deleteCustGroup(user:{Id:string,Session:string,Token:string},custGroup:string) {
    
  
    const data = new URLSearchParams({
        custGroup: custGroup,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token
    })

    try {
        const response = await axios.delete(CustGroupAPI.Delete+ data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
    
}