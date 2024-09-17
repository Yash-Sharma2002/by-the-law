import axios from "axios";
import { BussUnitAPI } from "../../config/API/BussUnit";


export default async function deleteBusUnit(user:{Id:string,Session:string,Token:string},busUnit:string) {
    
  
    const data = new URLSearchParams({
        busUnit: busUnit,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token
    })

    try {
        const response = await axios.delete(BussUnitAPI.Delete+ data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
    
}