

import axios from "axios";
import { RemarksAPI } from "../../config/API/Remarks";

export default async function deleteRemarks(location: any, currentUser: { Id: string, Session: string, Token: string }) {
    try {
        const data = new URLSearchParams({
            RecId: location || "",
            Id: currentUser.Id,
            Session: currentUser.Session,
            Token: currentUser.Token
        })

        const response = await axios.delete(RemarksAPI.Delete + data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;
    }
    catch (error: any) {
        return error;
    }
}
