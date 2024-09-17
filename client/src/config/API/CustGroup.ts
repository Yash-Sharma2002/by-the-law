import BaseUrl from "./Main";


const CustGroupUrl = BaseUrl + '/custGroup';


export const CustGroupAPI = {
    Create: CustGroupUrl + "/create",
    Update: CustGroupUrl + "/update",
    Delete: CustGroupUrl + "/delete?",
    GetAll: CustGroupUrl + "/all?",
    GetOne: CustGroupUrl + "/?",
}