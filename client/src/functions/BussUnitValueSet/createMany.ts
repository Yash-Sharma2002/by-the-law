import axios from "axios";
import { BussUnitValueSetAPI } from "../../config/API/BussUnitValueSet";



export default async function createManyBusUnitValueSet(user:{Id:string,Session:string,Token:string},jsonData:{UnitName:string,ValueSet:string}[]) {

  
    const data = {
        data: jsonData,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token
    }

    try {
        const response = await axios.post(BussUnitValueSetAPI.CreateMany, data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}

