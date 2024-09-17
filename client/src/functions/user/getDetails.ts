import axios from "axios";
import { UserAPI } from "../../config/API/User";


export default async function getDetails(Id: string, Session: string, Token: string,user:string) {
    try {
        let response = await axios
            .get(
                UserAPI.Get +
                new URLSearchParams({
                    user:user,
                    Id: Id,
                    Session: Session,
                    Token: Token,
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