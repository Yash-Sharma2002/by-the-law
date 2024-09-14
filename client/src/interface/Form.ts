

export default interface FormInterface {
    form_id?: string;
    name: string;
    client_id: string;
    created?: Date;
    status?: string;
    submitted?: boolean;
    progress?: number;
    submittedDate?: string;
    client_name?: string;
    client_username?: string;
}