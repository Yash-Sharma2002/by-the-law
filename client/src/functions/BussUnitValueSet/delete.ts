import axios from "axios";
import { BussUnitValueSetAPI } from "../../config/API/BussUnitValueSet";


export default async function deleteBussUnitValueSet(user:{Id:string,Session:string,Token:string},busUnitValueSet:string) {
    
  
    const data = new URLSearchParams({
        busUnitValueSet: busUnitValueSet,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token
    })

    try {
        const response = await axios.delete(BussUnitValueSetAPI.Delete+ data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
    
}