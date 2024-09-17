import axios from "axios";
import { CustTableAPI } from "../../config/API/CustTable";



async function getOneCustomer(user: { Id: string, Session: string, Token: string },RecId:string) {

    const data = new URLSearchParams({
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
        custTable:RecId
    })

    try {
        const response = await axios.get(CustTableAPI.GetOne+ data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}


export default getOneCustomer;