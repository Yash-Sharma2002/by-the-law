import BaseUrl from "./Main";


const ResourceUrl = BaseUrl + '/projTable/resource';

export const ResourceAPI = {
    AddDesignManager: ResourceUrl + "/assign/designManager",
    AddDesigner: ResourceUrl + "/assign",
    GetAssigned: ResourceUrl + "/?",
    RemoveResource: ResourceUrl + "/remove?",
}