import axios from "axios";
import { SecurityRoleAPI } from "../../config/API/SecurityRole";


export default async function getAll(user:{Id:string,Session:string,Token:string}) {
    try {
        let response = await axios
            .get(
                SecurityRoleAPI.GetAll +
                new URLSearchParams({
                    Id: user.Id,
                    Session: user.Session,
                    Token: user.Token,
                })
            )
            .then((res) => {
                return res.data;
            })
            .catch((err: any) => {
                return err.response.data;
            });

        return response;
    } catch (error: any) {
        return error.message;
    }    
}