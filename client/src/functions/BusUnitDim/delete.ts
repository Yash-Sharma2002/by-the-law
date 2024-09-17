

import axios from "axios";
import { BussUnitDimAPI } from "../../config/API/BussUnitDim";


export default async function deletebusUnitDim(busUnitDim: any, currentUser: { Id: string, Session: string, Token: string }) {
    try {
        const data = new URLSearchParams({
            busUnitDim: busUnitDim || "",
            Id: currentUser.Id,
            Session: currentUser.Session,
            Token: currentUser.Token
        })

        const response = await axios.delete(BussUnitDimAPI.Delete + data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;
    }
    catch (error: any) {
        return error;
    }
}

