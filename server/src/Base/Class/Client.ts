import Collections from "../Config/collections";
import ClientFieldsMessage from "../Config/response/Client";
import ResStatus from "../Config/ResStatus";
import Status from "../Config/Status";
import ClientClass, { ClientInterface } from "../Interface/Client";
import ResponseClass from "./Response";
import Sequence from "./Sequence";
import Start from "./Start";
import SysTableId from "./SysTableId";


class Client extends Start implements ClientClass {

    AccountNum: string = "";
    Name: string = "";
    Email: string = "";
    Phone: string = "";
    Password: string = "";
    Status: number = Status.Active;
    LawyerId: number = 0;
    CustGroup: number = 0;
    CreatedBy: string = "";
    ModifiedBy: string = "";
    CreatedDateTime: string = "";
    ModifiedDateTime: string = "";
    RecId?: number;

    constructor(client?: ClientInterface) {
        super();
        if (client) {
            this.setClient(client);
        }
        else {
            this.setBlank();
        }
    }

    setClient(client: ClientInterface): void {
        this.AccountNum = client.AccountNum;
        this.Name = client.Name;
        this.Email = client.Email;
        this.Phone = client.Phone;
        this.Password = client.Password;
        this.Status = client.Status;
        this.LawyerId = client.LawyerId;
        this.CustGroup = client.CustGroup || 0;
        this.CreatedBy = client.CreatedBy;
        this.ModifiedBy = client.ModifiedBy;
        this.CreatedDateTime = client.CreatedDateTime;
        this.ModifiedDateTime = client.ModifiedDateTime;
        this.RecId = client.RecId;
    }

    setBlank(): void {
        this.AccountNum = "";
        this.Name = "";
        this.Email = "";
        this.Password = "";
        this.Status = Status.Active;
        this.LawyerId = 0;
        this.CustGroup = 0;
        this.CreatedBy = "";
        this.ModifiedBy = "";
        this.CreatedDateTime = "";
        this.ModifiedDateTime = "";
        this.RecId = 0;
    }

    // params
    paramModifiedBy(ModifiedBy: string = this.ModifiedBy): string {
        return this.ModifiedBy = ModifiedBy;
    }

    paramCreatedBy(CreatedBy: string = this.CreatedBy): string {
        return this.CreatedBy = CreatedBy;
    }

    paramAccountNum(AccountNum: string = this.AccountNum): string {
        return this.AccountNum = AccountNum;
    }

    paramName(Name: string = this.Name): string {
        return this.Name = Name;
    }

    paramEmail(Email: string = this.Email): string {
        return this.Email = Email;
    }

    paramPassword(Password: string = this.Password): string {
        return this.Password = Password;
    }

    paramPhone(Phone: string = this.Phone): string {
        return this.Phone = Phone;
        
    }

    paramStatus(Status: number = this.Status): number {
        return this.Status = Status;
    }

    paramLawyerId(LawyerId: number = this.LawyerId): number {
        return this.LawyerId = LawyerId;
    }

    paramCustGroup(CustGroup: number = this.CustGroup): number {
        return this.CustGroup = CustGroup;
    }

    paramCreatedDateTime(CreatedDateTime: string = this.CreatedDateTime): string {
        return this.CreatedDateTime = CreatedDateTime;
    }

    paramModifiedDateTime(ModifiedDateTime: string = this.ModifiedDateTime): string {
        return this.ModifiedDateTime = ModifiedDateTime;
    }

    paramRecId(RecId: number = this.RecId || 0): number {
        return this.RecId = RecId;
    }

    get(): ClientInterface {
        return {
            AccountNum: this.AccountNum,
            Name: this.Name,
            Email: this.Email,
            Phone: this.Phone,
            Password: this.Password,
            Status: this.Status,
            LawyerId: this.LawyerId,
            CreatedBy: this.CreatedBy,
            ModifiedBy: this.ModifiedBy,
            CreatedDateTime: this.CreatedDateTime,
            ModifiedDateTime: this.ModifiedDateTime,
        }
    }


    validate(): void {
        this.validateName(this.Name)
        this.validateEmail(this.Email)
        this.validatePassword(this.Password)
        this.validatePhone(this.Phone)
        if (!this.LawyerId) throw new ResponseClass(ResStatus.BadRequest, ClientFieldsMessage.LawyerId)
    }

    async modified(): Promise<void> {
        this.validate();
        if (!this.AccountNum) {
            this.AccountNum = await new Sequence().getNext(await new SysTableId().getTableId(Collections.Client));
        }
        this.ModifiedDateTime = this.getDateTime();
    }

    /**
    * Check Exists
    * @param AccountNum
    * @param Email
    * @returns void
    */
    async checkExists(AccountNum: string = this.AccountNum, Email: string = this.Email): Promise<void> {
        const search: ClientInterface = await this.getOne(Collections.Client, {
            $or: [
                { AccountNum: AccountNum },
                { Email: Email }
            ]
        }) as ClientInterface;
        if (search !== undefined && search.RecId) throw new ResponseClass(ResStatus.Error, ClientFieldsMessage.AlreadyExists);
    }

    /**
   * Get Customer by AccountNum
   * @param AccountNum
   */
    async getCustomerByAccountNum(AccountNum: string = this.AccountNum): Promise<ClientInterface> {
        const custTable: ClientInterface = await this.getOne(Collections.Client, { AccountNum: AccountNum }) as unknown as ClientInterface;
        return custTable;
    }

    /**
     * Get Customer by RecId
     * @param RecId
     */
    async getCustomerByRecId(RecId: number = this.RecId || 0): Promise<ClientInterface> {
        await this.connectDb();
        const custTable = await this.getOne(Collections.Client, { RecId: RecId }) as unknown as ClientInterface;
        this.flush()
        return custTable;
    }

    /**
     * Check Not Exists
     * @param AccountNum
     * @param Email
     */
    async checkNotExists(AccountNum: string = this.AccountNum, Email: string = this.Email): Promise<void> {
        const search: ClientInterface = await this.getOne(Collections.Client, {
            $or: [
                { AccountNum: AccountNum },
                { Email: Email }
            ]
        }) as ClientInterface;
        if (!search.RecId) throw new ResponseClass(ResStatus.Error, ClientFieldsMessage.NotFound);
    }

    async insert(): Promise<void> {
        await this.checkExists();
        await this.modified();
        this.CreatedDateTime = this.ModifiedDateTime;
        this.RecId = (await this.insertOneWithOutput(Collections.Client, this.get(), { RecId: 1 })).RecId
    }

    async getLawyerId(AccountNum: string = this.AccountNum, RecId: number = this.RecId || 0): Promise<number> {
        await this.connectDb();
        const search: ClientInterface = await this.getOne(Collections.Client, {
            $or: [
                { AccountNum: AccountNum },
                { RecId: RecId }
            ]
        }) as ClientInterface;
        this.flush();
        if (!search.RecId) throw new ResponseClass(ResStatus.Error, ClientFieldsMessage.NotFound);
        return search.LawyerId;
    }

    async update(): Promise<void> {
        await this.checkNotExists();
        await this.modified();
        await this.updateOne(Collections.Client, { RecId: this.RecId }, this.get());
    }

    async delete(): Promise<void> {
        await this.checkNotExists();
        await this.deleteOne(Collections.Client, { RecId: this.RecId });
    }

    flush(): void {
        super.flush();
        this.setBlank();
    }



}

export default Client;