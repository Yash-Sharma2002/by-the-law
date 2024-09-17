import axios from "axios";
import { LocationAPI } from "../../config/API/Location";


async function getDetailLocation(user: { Id: string, Session: string, Token: string },reciId:string) {

    const data = new URLSearchParams({
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
        location: reciId
    })

    try {
        const response = await axios.get(LocationAPI.GetOne+ data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}


export default getDetailLocation;