

import axios from "axios";
import { UserGroupAPI } from "../../config/API/UserGroup";


export default async function getAllUserGroup(user: { Id: string, Session: string, Token: string }) {


    const data = new URLSearchParams({
        Id: user.Id,
        Session: user.Session,
        Token: user.Token
    })

    try {
        const response = await axios.get(UserGroupAPI.GetAll + data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }

}