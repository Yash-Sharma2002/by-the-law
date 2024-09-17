import axios from "axios";
import { UserAPI } from "../../config/API/User";


export default async function forgetPass(email: string) {

    try {
        let params = {
            email: email
        }

        let res = await axios.put(UserAPI.ForgetPass, params)
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