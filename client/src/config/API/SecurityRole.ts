import BaseUrl from "./Main";


const SecurityRoleUrl = BaseUrl + '/securityRole';

export const SecurityRoleAPI = {
    GetOne: SecurityRoleUrl + "/?",
    GetAll: SecurityRoleUrl + "/all?",
    Create: SecurityRoleUrl + "/create",
    Update: SecurityRoleUrl + "/update",
    Delete: SecurityRoleUrl + "/delete?",
}
