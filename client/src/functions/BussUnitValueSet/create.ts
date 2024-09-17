import axios from "axios";
import { BussUnitValueSetAPI } from "../../config/API/BussUnitValueSet";


export default async function createBussUnitValueSet(user:{Id:string,Session:string,Token:string},busUnitValueSet:{UnitName:string,ValueSet:string}) {

  
    const data = {
        busUnitValueSet: busUnitValueSet,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token
    }

    try {
        const response = await axios.post(BussUnitValueSetAPI.Create, data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}

