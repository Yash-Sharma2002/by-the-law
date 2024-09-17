import BaseUrl from "./Main";


const ProjTableUrl = BaseUrl + '/projTable';

export const ProjTableAPI = {
    Create: ProjTableUrl + "/create",
    Update: ProjTableUrl + "/update",
    Delete: ProjTableUrl + "/delete?",
    GetAll: ProjTableUrl + "/all?",
    AssignedProjManager: ProjTableUrl + "/filter/projManager?",
    Assigned: ProjTableUrl + "/assigned?",
    GetOne: ProjTableUrl + "/?",
}