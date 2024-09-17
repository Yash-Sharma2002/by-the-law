export default interface Client {
    client_id?:string;
    name: string;
    username: string;
    email: string;
    password: string;
    lawyer_id?: string;
    status: string;
    created?: Date;
    modified?: Date;
}