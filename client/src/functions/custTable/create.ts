import axios from "axios";
import { CustTableAPI } from "../../config/API/CustTable";
import { ClientInterface } from "../../interface/Client";

async function create(client: ClientInterface, user: { Id: string, Session: string, Token: string }) {

    const data = {
        custTable: client,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token
    }

    try {
        const response = await axios.post(CustTableAPI.Create, data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}


export default create;