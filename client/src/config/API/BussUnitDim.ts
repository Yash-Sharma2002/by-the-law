import BaseUrl from "./Main";


const BussUnitDimUrl = BaseUrl + '/busUnitDim';

export const BussUnitDimAPI = {
    Create: BussUnitDimUrl + "/create",
    Update: BussUnitDimUrl + "/update",
    Delete: BussUnitDimUrl + "/delete?",
    GetAll: BussUnitDimUrl + "/all?",
    GetOne: BussUnitDimUrl + "/?",
    GetByRef: BussUnitDimUrl + "/ref?",
}