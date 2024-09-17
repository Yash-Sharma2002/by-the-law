import BaseUrl from "./Main";


const UserUrl = BaseUrl + '/user';

export const UserAPI = {
    Login: UserUrl + '/access?',
    Create: UserUrl + '/create',
    Update: UserUrl + '/update',
    Delete: UserUrl + '/delete?',
    Get: UserUrl + '/all?',
    GetRecId: UserUrl + '/get-RecId?',
    Add: UserUrl + '/add',
    ForgetPass: UserUrl + '/password/forget',
    VerifyOTP: UserUrl + '/otp/verify',
    ResetPassword: UserUrl + '/password/reset',
    GetUserDetails:UserUrl + "/?",
    AddGroup: UserUrl + '/group/add',
    RemoveGroup: UserUrl + '/group/remove?',
}
