import axios from "axios";
import { CustGroupAPI } from "../../config/API/CustGroup";
import { CustGroupInterface } from "../../interface/CustGroup";

export default async function updateCustGroup(user: { Id: string, Session: string, Token: string }, custGroup: CustGroupInterface) {


    const data = {
        custGroup: custGroup,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token
    }

    try {
        const response = await axios.put(CustGroupAPI.Update, data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}

