import axios from "axios";
import { SequenceInterface } from "../../interface/Sequence";
import { SequenceAPI } from "../../config/API/Sequence";


async function createNumberSeries(sequence: SequenceInterface, user: { Id: string, Session: string, Token: string }) {

    const data = {
        sequence: sequence,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token
    }

    try {
        const response = await axios.post(SequenceAPI.Create, data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}


export default createNumberSeries;