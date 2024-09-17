import Collections from "../Config/collections";
import FormFieldsMessage from "../Config/response/Form";
import ResStatus from "../Config/ResStatus";
import FormClass, { FormInterface } from "../Interface/Form";
import Client from "./Client";
import ResponseClass from "./Response";
import Start from "./Start";



class Form extends Start implements FormClass {

    ClientId: number = 0;
    LawyerId: number = 0;
    Form: string = "";
    Details: number = 0;
    RecId?: number;
    CreatedBy: string = "";
    ModifiedBy: string = "";
    CreatedDateTime: string = "";
    ModifiedDateTime: string = "";

    constructor(form?: FormInterface) {
        super();
        if (form) {
            this.setForm(form);
        } else {
            this.setBlank();
        }
    }

    setForm(form: FormInterface): void {
        this.ClientId = form.ClientId;
        this.LawyerId = form.LawyerId;
        this.Form = form.Form;
        this.Details = form.Details;
        this.RecId = form.RecId;
        this.CreatedBy = form.CreatedBy;
        this.ModifiedBy = form.ModifiedBy;
        this.CreatedDateTime = form.CreatedDateTime;
        this.ModifiedDateTime = form.ModifiedDateTime;
    }

    setBlank(): void {
        this.ClientId = 0;
        this.LawyerId = 0;
        this.Form = "";
        this.Details = 0;
        this.RecId = 0; 
        this.CreatedBy = "";
        this.ModifiedBy = "";
        this.CreatedDateTime = "";
        this.ModifiedDateTime = "";
    }

    // params
    paramClientId(ClientId: number): number {
        return this.ClientId = ClientId;
    }

    paramLawyerId(LawyerId: number): number {
        return this.LawyerId = LawyerId;
    }

    paramForm(Form: string): string {
        return this.Form = Form;
    }

    paramDetails(Details: number): number {
        return this.Details = Details;
    }

    paramRecId(RecId: number): number {
        return this.RecId = RecId;
    }

    paramCreatedBy(CreatedBy: string): string {
        return this.CreatedBy = CreatedBy;
    }

    paramModifiedBy(ModifiedBy: string): string {
        return this.ModifiedBy = ModifiedBy;
    }

    paramCreatedDateTime(CreatedDateTime: string): string {
        return this.CreatedDateTime = CreatedDateTime;
    }

    paramModifiedDateTime(ModifiedDateTime: string): string {
        return this.ModifiedDateTime = ModifiedDateTime;
    }

    validate(): void {
        if (!this.ClientId) throw new ResponseClass(ResStatus.BadRequest, FormFieldsMessage.ClientId)
        if (!this.Form) throw new ResponseClass(ResStatus.BadRequest, FormFieldsMessage.FormName)
    }

    async modified(): Promise<void> {
        this.validate();
        if(!this.LawyerId) {
            this.LawyerId = await new Client().getLawyerId("",this.ClientId);
        }
        this.ModifiedDateTime = this.getDateTime();
    }

    async insert(): Promise<void> {
        await this.modified();
        this.RecId = (await this.insertOneWithOutput(Collections.Form, this.get(), { RecId: 1 })).RecId
    }

    async update(): Promise<void> {
        await this.modified();
        await this.updateOne(Collections.Form, { RecId: this.RecId }, this.get());
    }

    async delete(): Promise<void> {
        await this.deleteOne(Collections.Form, { RecId: this.RecId });
    }

   
    async get(): Promise<void> {
        const form: FormInterface = await this.getOne(Collections.Form, { RecId: this.RecId }) as FormInterface;
        if (!form.RecId) throw new ResponseClass(ResStatus.NotFound, FormFieldsMessage.NotFound);
        this.setForm(form);
    }

    flush(): void {
        super.flush();
        this.setBlank();
    }
}

export default Form;