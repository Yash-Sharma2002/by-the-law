import axios from "axios";
import { LocationAPI } from "../../config/API/Location";


async function getWorkerAddress(user: { Id: string, Session: string, Token: string },workerTable:string) {

    const data = new URLSearchParams({
        RefRecId:workerTable,
        RefTableName: "WorkerTable",
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


export default getWorkerAddress;