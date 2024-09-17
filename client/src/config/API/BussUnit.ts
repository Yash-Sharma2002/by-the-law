import BaseUrl from "./Main";


const LocationUrl = BaseUrl + '/busUnit';

export const BussUnitAPI = {
    Create: LocationUrl + "/create",
    Update: LocationUrl + "/update",
    Delete: LocationUrl + "/delete?",
    GetAll: LocationUrl + "/all?",
    GetOne: LocationUrl + "/?",
}
