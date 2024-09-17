import axios from "axios";
import { CustGroupAPI } from "../../config/API/CustGroup";


export default async function createCustGroup(user:{Id:string,Session:string,Token:string},custGroup:{Name:string,Description:string}) {

  
    const data = {
        custGroup: custGroup,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token
    }

    try {
        const response = await axios.post(CustGroupAPI.Create, data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}

