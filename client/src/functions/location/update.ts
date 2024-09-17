import axios from "axios";
import { LocationAPI } from "../../config/API/Location";
import LocationInterface from "../../interface/Location";


export default async function updateLocation(address:LocationInterface, user: { Id: string, Session: string, Token: string }) {

    const data = {
        location: address,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
    }

    try {
        const response = await axios.put(LocationAPI.Update, data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}


