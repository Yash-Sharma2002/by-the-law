import BaseUrl from "./Main";


const SequenceUrl = BaseUrl + '/sequence';

export const SequenceAPI = {
    Create: SequenceUrl + '/create',
    Update: SequenceUrl + '/update',
    Delete: SequenceUrl + '/delete?',
    Get: SequenceUrl + '/all?',
    GetOne: SequenceUrl + '/?',
    GetTables: SequenceUrl + '/tables?'
}