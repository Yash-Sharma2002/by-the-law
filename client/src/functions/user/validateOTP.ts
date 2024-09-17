import axios from "axios";
import { UserAPI } from "../../config/API/User";



export default async function validateOTP(email: string, otp: number) {

    try {
        let params = {
            email: email,
            otp: otp
        }

        let res = await axios.put(UserAPI.VerifyOTP, params)
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