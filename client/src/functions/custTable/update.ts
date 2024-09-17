import axios from "axios";
import { CustTableAPI } from "../../config/API/CustTable";


export default async function updateClient(client : any, user: { Id: string, Session: string, Token: string }) {

    const data = {
        custTable: client,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token
    }

    try {
        const response = await axios.put(CustTableAPI.Update, data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}


