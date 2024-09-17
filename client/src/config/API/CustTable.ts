
import BaseUrl from "./Main";


const CustTableUrl = BaseUrl + '/custTable';



export const CustTableAPI = {
    Create: CustTableUrl + "/create",
    Update: CustTableUrl + "/update",
    Delete: CustTableUrl + "/delete?",
    GetAll: CustTableUrl + "/all?",
    Manager: CustTableUrl + "/my?",
    GetOne: CustTableUrl + "/?",
}