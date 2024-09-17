import axios from "axios";
import { UserAPI } from "../../config/API/User";


export default async function addGroup(user:any,CurrentUser:{Id:string,Session:string,Token:string},userGroup:string) {

    try {
        let params = {
            user: user,
            userGroup: userGroup,
            Id: CurrentUser.Id,
            Session: CurrentUser.Session,
            Token: CurrentUser.Token
        }

        let res = await axios.put(UserAPI.AddGroup, params)
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                return error.response.data;
            });

        return res;

    } catch (error) {
        return error;
    }

}