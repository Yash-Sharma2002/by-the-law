

import axios from "axios";
import { BussUnitValueSetAPI } from "../../config/API/BussUnitValueSet";

export default async function getAllByUnitBussUnitValueSet(user: { Id: string, Session: string, Token: string }, UnitName: string) {


    const data = new URLSearchParams({
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
        UnitName: UnitName
    })

    try {
        const response = await axios.get(BussUnitValueSetAPI.GetAllByUnit + data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }

}