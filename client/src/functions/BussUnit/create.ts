import axios from "axios";
import { BussUnitAPI } from "../../config/API/BussUnit";


export default async function createBusUnit(user:{Id:string,Session:string,Token:string},busUnit:{Name:string,Description:string}) {

  
    const data = {
        busUnit: busUnit,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token
    }

    try {
        const response = await axios.post(BussUnitAPI.Create, data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}

