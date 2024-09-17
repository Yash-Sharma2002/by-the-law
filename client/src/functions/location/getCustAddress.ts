import axios from "axios";
import { LocationAPI } from "../../config/API/Location";


async function getCustAddress(user: { Id: string, Session: string, Token: string },custTable:string) {

    const data = new URLSearchParams({
        RefRecId:custTable,
        RefTableName: "CustTable",
        Id: user.Id,
        Session: user.Session,
        Token: user.Token
    })

    try {
        const response = await axios.get(LocationAPI.GetByRef+ data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}


export default getCustAddress;