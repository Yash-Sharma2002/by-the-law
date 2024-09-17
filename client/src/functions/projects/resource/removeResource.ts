import axios from "axios";
import { ResourceAPI } from "../../../config/API/Resource";

export default async function removeResource(RecId: string, user: { Id: string, Session: string, Token: string }) {

    const data = new URLSearchParams({
        projEmplSetup: RecId,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
    })

    try {
        const response = await axios.delete(ResourceAPI.RemoveResource + data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}