import BaseUrl from "./Main";


const SettinsgUrl = BaseUrl + '/settings';

export const SettingsAPI = {
    CreateUser: SettinsgUrl + '/create/user',
    CreateGroup: SettinsgUrl + '/create/userGroup',
    Update: SettinsgUrl + '/update',
    Delete: SettinsgUrl + '/delete?',
    GetUser: SettinsgUrl + '/user?',
    GetGroup: SettinsgUrl + '/userGroup?'
}
