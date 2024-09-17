import Collections from "../Config/collections";
import ProjEmplSetupMessages from "../Config/response/ProjEmplSetup";
import ResStatus from "../Config/ResStatus";
import ProjEmplSetupClass, { ProjEmplSetupInterface } from "../Interface/ProjEmplSetup";
import ResponseClass from "./Response";
import Start from "./Start";


class ProjEmplSetup extends Start implements ProjEmplSetupClass {
    ProjId: number = 0;
    UserId: number = 0;
    RecId: number = 0;
    CreatedBy: string = '';
    CreatedDateTime: string = '';
    ModifiedBy: string = '';
    ModifiedDateTime: string = '';

    constructor(projEmplSetup?: ProjEmplSetupInterface) {
        super();
        if (projEmplSetup) {
            this.setProjEmplSetup(projEmplSetup);
        } else {
            this.setBlank();
        }
    }

    setProjEmplSetup(projEmplSetup: ProjEmplSetupInterface): void {
        this.ProjId = projEmplSetup.ProjId;
        this.UserId = projEmplSetup.UserId;
        this.RecId = projEmplSetup.RecId || 0;
        this.CreatedBy = projEmplSetup.CreatedBy;
        this.CreatedDateTime = projEmplSetup.CreatedDateTime || '';
        this.ModifiedBy = projEmplSetup.ModifiedBy;
        this.ModifiedDateTime = projEmplSetup.ModifiedDateTime || '';
    }

    setBlank(): void {
        this.ProjId = 0;
        this.UserId = 0;
        this.RecId = 0;
        this.CreatedBy = '';
        this.CreatedDateTime = '';
        this.ModifiedBy = '';
        this.ModifiedDateTime = '';
    }

    get(): ProjEmplSetupInterface {
        return {
            ProjId: this.ProjId,
            UserId: this.UserId,
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

    paramProjId(ProjId: number = this.ProjId): number {
        this.ProjId = ProjId;
        return this.ProjId;
    }

    paramUserId(UserId: number = this.UserId): number {
        this.UserId = UserId;
        return this.UserId;
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
        if (this.ProjId === 0) {
            throw new ResponseClass(ResStatus.BadRequest, ProjEmplSetupMessages.PROJID_REQUIRED)
        }
        if (this.UserId === 0) {
            throw new ResponseClass(ResStatus.BadRequest, ProjEmplSetupMessages.USERID_REQUIRED)
        }
    }

    /**
     * Modified the ProjEmplSetup
     */
    modified(): void {
        this.validate()
        this.ModifiedDateTime = this.getDateTime();
    }

    /**
     * Check if the ProjEmplSetup exists
     * @param ProjId
     * @param UserId
     */
    async checkExists(ProjId: number = this.ProjId, UserId: number = this.UserId): Promise<void> {
        if(ProjId === 0 || UserId === 0) throw new ResponseClass(ResStatus.BadRequest, ProjEmplSetupMessages.PROJID_USERID_REQUIRED);
        let result = (await this.getWithColumns(Collections.ProjEmplSetup, { ProjId: ProjId, UserId: UserId }, {"RecId":1}, "AND")) as unknown as ProjEmplSetupInterface;
        if (result !== undefined && result.RecId) throw new ResponseClass(ResStatus.BadRequest, ProjEmplSetupMessages.EMPLOYEE_ALREADY_ASSIGNED);
    }

    /**
     * Check if the ProjEmplSetup not exists
     * @param ProjId
     * @param UserId
     */
    async checkNotExists(ProjId: number = this.ProjId, UserId: number = this.UserId): Promise<void> {
        let result = (await this.getWithColumns(Collections.ProjEmplSetup, { ProjId: ProjId, UserId: UserId }, {"RecId":1}, "AND")) as unknown as ProjEmplSetupInterface;
        if (result === undefined || !result.RecId) throw new ResponseClass(ResStatus.BadRequest, ProjEmplSetupMessages.EMPLOYEE_NOT_ASSIGNED);
    }

    /**
     * Insert the ProjEmplSetup
     */
    async insert(): Promise<void> {
        this.modified();
        this.CreatedDateTime = this.ModifiedDateTime;
        this.RecId = (await this.insertOneWithOutput(Collections.ProjEmplSetup, this.get(), {"RecId":1})).RecId
    }

    /**
     * Update the ProjEmplSetup
     */
    async update(): Promise<void> {
        this.modified();
        await this.updateOne(Collections.ProjEmplSetup, { RecId: this.RecId }, this.get());
    }

    /**
     * Delete the ProjEmplSetup
     * @param RecId 
     */
    async delete(RecId: number = this.RecId): Promise<void> {
        await this.deleteOne(Collections.ProjEmplSetup, { RecId: RecId });
    }


}

export default ProjEmplSetup;