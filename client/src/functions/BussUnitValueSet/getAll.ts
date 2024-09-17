

import axios from "axios";
import { BussUnitValueSetAPI } from "../../config/API/BussUnitValueSet";

export default async function getAllBussUnitValueSet(user: { Id: string, Session: string, Token: string }) {


    const data = new URLSearchParams({
        Id: user.Id,
        Session: user.Session,
        Token: user.Token
    })

    try {
        const response = await axios.get( BussUnitValueSetAPI.GetAll + data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }

}