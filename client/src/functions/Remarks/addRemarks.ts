import axios from "axios";
import RemarksInterface from "../../interface/Remarks";
import { RemarksAPI } from "../../config/API/Remarks";

export default async function createRemarks(remarks:RemarksInterface, user: { Id: string, Session: string, Token: string },ref: { TableName: string, RecId: number }) {

    const data = {
        remarks: remarks,
        Id: user.Id,
        Session: user.Session,
        Token: user.Token,
        Ref: ref
    }

    try {
        const response = await axios.post(RemarksAPI.Add, data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;

    } catch (error: any) {
        return error;
    }
}

