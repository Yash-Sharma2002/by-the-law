import BaseUrl from "./Main";



const ResultsUrl = BaseUrl + '/userGroup';

export const UserGroupAPI = {
    Create: ResultsUrl + '/create',
    Update: ResultsUrl + '/update',
    Delete: ResultsUrl + '/delete?',
    GetOne: ResultsUrl + '/?',
    GetAll: ResultsUrl + '/all?',
    GetByUser: ResultsUrl + '/byUser?',
}