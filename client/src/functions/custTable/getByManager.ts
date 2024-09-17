import axios from "axios";
import { CustTableAPI } from "../../config/API/CustTable";

async function getByManager(user: { Id: string, Session: string, Token: string }) {

    const data = new URLSearchParams({
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
        user: user.Id,
    })

    try {
        const response = await axios.get(CustTableAPI.Manager + data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}


export default getByManager;