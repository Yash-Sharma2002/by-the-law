import axios from "axios";
import { UserGroupAPI } from "../../config/API/UserGroup";
import { UserGroupInterface } from "../../interface/UserGroup";

export default async function updateUserGroup(user: { Id: string, Session: string, Token: string }, userGroup: UserGroupInterface) {


    const data = {
        userGroup: userGroup,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token
    }

    try {
        const response = await axios.put(UserGroupAPI.Update, data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}

