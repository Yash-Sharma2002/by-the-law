import Collections from "../Config/collections";
import CustGroupMessage from "../Config/response/CustGroup";
import ResStatus from "../Config/ResStatus";
import CustGroupClass, { CustGroupInterface } from "../Interface/CustGroup";
import ResponseClass from "./Response";
import Start from "./Start";


class CustGroup extends Start implements CustGroupClass {
    Name: string = '';
    Description: string = '';
    RecId: number = 0;
    CreatedBy: string = '';
    CreatedDateTime: string = '';
    ModifiedBy: string = '';
    ModifiedDateTime: string = '';

    constructor(custGroup?: CustGroupInterface) {
        super();
        if (custGroup) {
            this.setCustGroup(custGroup);
        } else {
            this.setBlank();
        }
    }

    setCustGroup(custGroup: CustGroupInterface): void {
        this.Name = custGroup.Name;
        this.Description = custGroup.Description;
        this.RecId = custGroup.RecId || 0;
        this.CreatedBy = custGroup.CreatedBy;
        this.CreatedDateTime = custGroup.CreatedDateTime || '';
        this.ModifiedBy = custGroup.ModifiedBy;
        this.ModifiedDateTime = custGroup.ModifiedDateTime || '';
    }

    setBlank(): void {
        this.Name = '';
        this.Description = '';
        this.RecId = 0;
        this.CreatedBy = '';
        this.CreatedDateTime = '';
        this.ModifiedBy = '';
        this.ModifiedDateTime = '';
    }

    get(): CustGroupInterface {
        return {
            Name: this.Name,
            Description: this.Description,
            CreatedBy: this.CreatedBy,
            CreatedDateTime: this.CreatedDateTime,
            ModifiedBy: this.ModifiedBy,
            ModifiedDateTime: this.ModifiedDateTime
        }
    }

    flush(): void {
        super.flush();
        this.setBlank();
    }

    paramName(Name: string = this.Name): string {
        this.Name = Name;
        return this.Name;
    }

    paramDescription(Description: string = this.Description): string {
        this.Description = Description;
        return this.Description;
    }

    paramRecId(RecId: number = this.RecId): number {
        this.RecId = RecId;
        return this.RecId;
    }

    paramCreatedBy(CreatedBy: string = this.CreatedBy): string {
        this.CreatedBy = CreatedBy;
        return this.CreatedBy;
    }

    paramCreatedDateTime(CreatedDateTime: string = this.CreatedDateTime): string {
        this.CreatedDateTime = CreatedDateTime;
        return this.CreatedDateTime;
    }

    paramModifiedBy(ModifiedBy: string = this.ModifiedBy): string {
        this.ModifiedBy = ModifiedBy;
        return this.ModifiedBy;
    }

    paramModifiedDateTime(ModifiedDateTime: string = this.ModifiedDateTime): string {
        this.ModifiedDateTime = ModifiedDateTime;
        return this.ModifiedDateTime;
    }

    validate(): void {
        if (!this.Name) throw new ResponseClass(ResStatus.BadRequest, CustGroupMessage.NAME_REQUIRED);
        this.validateDescription(this.Description)
    }

    modified(): void {
        this.validate();
        this.ModifiedDateTime = this.getDateTime();
    }

    /**
     * Check the Customer Group already exists
     * @param Name
     * @param RecId
     */
    async checkExists(Name: string = this.Name, RecId: number = this.RecId || 0): Promise<void> {
        let result = (await this.getWithColumns(Collections.CustGroup, { Name: Name, RecId: RecId }, ["RecId"], "OR")) as unknown as CustGroupInterface;
        if (result !== undefined && result.RecId) throw new ResponseClass(ResStatus.BadRequest, CustGroupMessage.ALREADY_EXISTS);
    }

    /**
     * Check the Customer Group not exists
     * @param Name
     * @param RecId
     */
    async checkNotExists(Name: string = this.Name, RecId: number = this.RecId || 0): Promise<void> {
        let result = (await this.getWithColumns(Collections.CustGroup, { Name: Name, RecId: RecId }, {
            RecId:1
        }, "OR")) as unknown as CustGroupInterface;
        if (!result.RecId) throw new ResponseClass(ResStatus.BadRequest, CustGroupMessage.NOT_FOUND);
    }

    /**
     * Insert the Customer Group
     */
    async insert(): Promise<void> {
        this.modified();
        this.CreatedDateTime = this.ModifiedDateTime;
        this.RecId = (await this.insertOneWithOutput(Collections.CustGroup, this.get(), {
            RecId:1
        })).RecId;
    }

    /**
     * Update the Customer Group
     */
    async update(): Promise<void> {
        this.modified();
        await this.updateOne(Collections.CustGroup, { RecId: this.RecId }, this.get());
    }

    /**
     * Delete the Customer Group
     */
    async delete(): Promise<void> {
        await this.deleteOne(Collections.CustGroup, { RecId: this.RecId });
    }

    /**
     * Get the Customer Group
     * @param Name
     */
    async getGroup(Name: string): Promise<CustGroupInterface> {
        await this.connectDb()
        return (await this.getWithColumns(Collections.CustGroup, { Name: Name }, {
            RecId:1
        })) as unknown as CustGroupInterface;
    }
}

export default CustGroup;