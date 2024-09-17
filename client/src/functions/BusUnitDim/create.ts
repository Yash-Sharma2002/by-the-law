import axios from "axios";
import { BusUnitDimInterface } from "../../interface/BusUnitDim";
import { BussUnitDimAPI } from "../../config/API/BussUnitDim";


export default async function createBusUnitDim(busUnitDim:BusUnitDimInterface, user: { Id: string, Session: string, Token: string },ref: { TableName: string, RecId: number }) {

    const data = {
        busUnitDim: busUnitDim,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
        Ref: ref
    }

    try {
        const response = await axios.post(BussUnitDimAPI.Create, data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}


 