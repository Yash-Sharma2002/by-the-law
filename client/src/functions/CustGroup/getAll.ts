

import axios from "axios";
import { CustGroupAPI } from "../../config/API/CustGroup";


export default async function getAllCustGroup(user: { Id: string, Session: string, Token: string }) {


    const data = new URLSearchParams({
        Id: user.Id,
        Session: user.Session,
        Token: user.Token
    })

    try {
        const response = await axios.get(CustGroupAPI.GetAll + data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }

}