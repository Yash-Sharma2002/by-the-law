

import axios from "axios";
import { CustTableAPI } from "../../config/API/CustTable";


async function deleteCustomer(custTable: any, currentUser: { Id: string, Session: string, Token: string }) {
    try {
        const data = new URLSearchParams({
            custTable: custTable,
            Id: currentUser.Id,
            Session: currentUser.Session,
            Token: currentUser.Token
        })

        const response = await axios.delete(CustTableAPI.Delete+ data)
            .then((response) => response.data)
            .catch((error) => error.response.data);

        return response;
    }
    catch (error: any) {
        return error;
    }
}

export default deleteCustomer;