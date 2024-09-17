

import axios from "axios";
import { UserGroupAPI } from "../../config/API/UserGroup";

export default async function getByNameUserGroup(user: { Id: string, Session: string, Token: string },userGroup:string) {


    const data = new URLSearchParams({
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
        userGroup: userGroup,
    })

    try {
        const response = await axios.get(UserGroupAPI.GetByName + data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }

}