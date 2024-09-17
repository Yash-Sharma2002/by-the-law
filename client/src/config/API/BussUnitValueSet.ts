import BaseUrl from "./Main";


const BussUnitValueSetUrl = BaseUrl + '/busUnitValueSet';

export const BussUnitValueSetAPI = {
    Create: BussUnitValueSetUrl + "/create",
    CreateMany: BussUnitValueSetUrl + "/createMany",
    Update: BussUnitValueSetUrl + "/update",
    Delete: BussUnitValueSetUrl + "/delete?",
    GetAll: BussUnitValueSetUrl + "/all?",
    GetOne: BussUnitValueSetUrl + "/?",
    GetAllByUnit: BussUnitValueSetUrl + "/allByUnit?",
}