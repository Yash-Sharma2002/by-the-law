import axios from "axios";
import { RemarksAPI } from "../../config/API/Remarks";


async function getAllRemarks(user: { Id: string, Session: string, Token: string },RefRecId: number, RefTableName: string) {

    const data = new URLSearchParams({
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
        RefRecId: RefRecId.toString(),
        RefTableName: RefTableName
    })

    try {
        const response = await axios.get(RemarksAPI.Get+ data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }    
}


export default getAllRemarks;