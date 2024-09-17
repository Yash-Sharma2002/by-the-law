

import axios from "axios";
import { SequenceAPI } from "../../config/API/Sequence";



async function deleteSeries(custTable: any, currentUser: { Id: string, Session: string, Token: string }) {
    try {
        const data = new URLSearchParams({
            projTable: custTable,
            Id: currentUser.Id,
            Session: currentUser.Session,
            Token: currentUser.Token
        })

        const response = await axios.delete(SequenceAPI.Delete+ data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;
    }
    catch (error: any) {
        return error;
    }
}

export default deleteSeries;