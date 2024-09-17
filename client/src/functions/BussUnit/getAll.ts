

import axios from "axios";
import { BussUnitAPI } from "../../config/API/BussUnit";


export default async function getAllBussUnit(user: { Id: string, Session: string, Token: string }) {


    const data = new URLSearchParams({
        Id: user.Id,
        Session: user.Session,
        Token: user.Token
    })

    try {
        const response = await axios.get( BussUnitAPI.GetAll + data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }

}