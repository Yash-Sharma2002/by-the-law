import axios from "axios";
import { UserAPI } from "../../config/API/User";


export default async function login(email: string, password: string) {

    try {
        let params = new URLSearchParams({
            email: email,
            password: password
        })

        let res = await axios.get(UserAPI.Login + params)
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