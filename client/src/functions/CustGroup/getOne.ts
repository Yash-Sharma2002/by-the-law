

import axios from "axios";
import { CustGroupAPI } from "../../config/API/CustGroup";


export default async function getOneCustGroup(user: { Id: string, Session: string, Token: string },custGroup:string) {


    const data = new URLSearchParams({
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
        custGroup:custGroup
    })

    try {
        const response = await axios.get(CustGroupAPI.GetOne + data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }

}