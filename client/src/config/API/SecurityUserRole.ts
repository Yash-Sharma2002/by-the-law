import BaseUrl from "./Main";


const SecurityUserRoleUrl = BaseUrl + '/securityUserRole';


export const SecurityUserRoleAPI = {
    Add: SecurityUserRoleUrl + "/add",
    Get: SecurityUserRoleUrl + "/?",
    GetAll: SecurityUserRoleUrl + "/all?",
    Update: SecurityUserRoleUrl + "/update",
    Delete: SecurityUserRoleUrl + "/remove?",
    Role: SecurityUserRoleUrl + "/role?",
}