import axios from "axios";
import { BussUnitValueSetAPI } from "../../config/API/BussUnitValueSet";
import { BusUnitValueSetInterface } from "../../interface/BusUnitValueSet";

export default async function updateBBussUnitValueSet(user: { Id: string, Session: string, Token: string }, busUnitValueSet: BusUnitValueSetInterface) {


    const data = {
        busUnitValueSet: busUnitValueSet,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token
    }

    try {
        const response = await axios.put(BussUnitValueSetAPI.Update, data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}

