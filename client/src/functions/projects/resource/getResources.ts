import axios from "axios";
import { ResourceAPI } from "../../../config/API/Resource";


export default async function getResources(project: string, user: { Id: string, Session: string, Token: string }) {
    try {
        const data = new URLSearchParams({
            projEmplSetup: project,
            Id: user.Id,
            Session: user.Session,
            Token: user.Token,
        })
        const response = await axios.get(ResourceAPI.GetAssigned + data)
            .then((response) => response.data)
            .catch((error) => error.response.data);
        return response;
    }
    catch (error: any) {
        return error;
    }

}