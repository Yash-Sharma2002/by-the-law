

import axios from "axios";
import { LocationAPI } from "../../config/API/Location";



async function deleteLocation(location: any, currentUser: { Id: string, Session: string, Token: string }) {
    try {
        const data = new URLSearchParams({
            location: location || "",
            Id: currentUser.Id,
            Session: currentUser.Session,
            Token: currentUser.Token
        })

        const response = await axios.delete(LocationAPI.Delete + data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;
    }
    catch (error: any) {
        return error;
    }
}

export default deleteLocation;