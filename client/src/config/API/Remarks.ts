import BaseUrl from "./Main";


const RemarksUrl = BaseUrl + '/remarks';

export const RemarksAPI = {
    Add: RemarksUrl + "/add",
    Update: RemarksUrl + "/update",
    Delete: RemarksUrl + "/delete?",
    Get: RemarksUrl + "/?",
}