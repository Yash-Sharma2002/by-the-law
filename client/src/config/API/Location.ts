import BaseUrl from "./Main";


const LocationUrl = BaseUrl + '/location';

export const LocationAPI = {
    Create: LocationUrl + "/create",
    Update: LocationUrl + "/update",
    Delete: LocationUrl + "/delete?",
    Get: LocationUrl + "/all?",
    GetByRef: LocationUrl + "/ref?",
    GetOne: LocationUrl + "/details?",
}