export default interface ClientInterface {
  client_id?:string;
  name: string;
  username: string;
  email: string;
  password: string;
  lawyer_id: string;
  status?: string;
  lawyer?:any,
  created?: Date;
  }
  