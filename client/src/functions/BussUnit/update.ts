import axios from "axios";
import { BussUnitAPI } from "../../config/API/BussUnit";
import { BusUnitInterface } from "../../interface/BusUnit";


export default async function updateBussUnit(user: { Id: string, Session: string, Token: string }, busUnit: BusUnitInterface) {


    const data = {
        busUnit: busUnit,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token
    }

    try {
        const response = await axios.put(BussUnitAPI.Update, data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}

