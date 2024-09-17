import axios from "axios";
import { UserAPI } from "../../config/API/User";



export default async function resetPass(email: string, Id: string, Password: string) {

    try {
        let params = {
            Email: email,
            Id: Id,
            Password: Password

        }

        let res = await axios.put(UserAPI.ResetPassword, params)
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