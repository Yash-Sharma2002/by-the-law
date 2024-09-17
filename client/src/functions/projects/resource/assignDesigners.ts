import axios from "axios";
import { ResourceAPI } from "../../../config/API/Resource";

export default async function assignLawyers(project: string, designer: string, user: { Id: string, Session: string, Token: string }) {

    const data = {
        projEmplSetup: {
            ProjId: project,
            UserId: designer
        },
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
    }

    try {
        const response = await axios.post(ResourceAPI.AddDesigner, data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}