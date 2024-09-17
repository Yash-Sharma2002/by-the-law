import axios from "axios";
import { UserAPI } from "../../config/API/User";


export default async function addUser(user:any,CurrentUser:{Id:string,Session:string,Token:string}) {

    try {
        let params = {
            user: user,
            Id: CurrentUser.Id,
            Session: CurrentUser.Session,
            Token: CurrentUser.Token
        }

        let res = await axios.post(UserAPI.Add, params)
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