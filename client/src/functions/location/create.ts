import axios from "axios";
import LocationInterface from "../../interface/Location";
import { LocationAPI } from "../../config/API/Location";


async function createLocation(address:LocationInterface, user: { Id: string, Session: string, Token: string },ref: { TableName: string, RecId: number }) {

    const data = {
        location: address,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
        Ref: ref
    }

    try {
        const response = await axios.post(LocationAPI.Create, data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}


export default createLocation;