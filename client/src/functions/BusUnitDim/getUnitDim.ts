import axios from "axios";
import { BussUnitDimAPI } from "../../config/API/BussUnitDim";

export default async function getUnitDim(user: { Id: string, Session: string, Token: string }, RefRecId: string, TableName: string) {

    const data = new URLSearchParams({
        RefRecId: RefRecId,
        RefTableName: TableName,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token
    })

    try {
        const response = await axios.get(BussUnitDimAPI.GetByRef + data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}


