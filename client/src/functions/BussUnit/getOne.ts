

import axios from "axios";
import { BussUnitAPI } from "../../config/API/BussUnit";


export default async function getOneBussUnit(user: { Id: string, Session: string, Token: string },busUnit:string) {


    const data = new URLSearchParams({
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
        busUnit:busUnit
    })

    try {
        const response = await axios.get(BussUnitAPI.GetOne + data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }

}