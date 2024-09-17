import Collections from "../Config/collections";
import ResStatus from "../Config/ResStatus";
import UserGroupMessage from "../Config/response/UserGroup";
import UserGroupClass, { UserGroupInterface } from "../Interface/UserGroup"
import ResponseClass from "./Response";
import Start from "./Start";

class UserGroup extends Start implements UserGroupClass {
    Name: string = '';
    Description: string = '';
    RecId: number = 0;
    CreatedBy: string = '';
    CreatedDateTime: string = '';
    ModifiedBy: string = '';
    ModifiedDateTime: string = '';

    constructor(userGroup?: UserGroupInterface) {
        super();
        if (userGroup) {
            this.setUserGroup(userGroup);
        } else {
            this.setBlank();
        }
    }

    setUserGroup(userGroup: UserGroupInterface): void {
        this.Name = userGroup.Name;
        this.Description = userGroup.Description;
        this.RecId = userGroup.RecId || 0;
        this.CreatedBy = userGroup.CreatedBy;
        this.CreatedDateTime = userGroup.CreatedDateTime || '';
        this.ModifiedBy = userGroup.ModifiedBy;
        this.ModifiedDateTime = userGroup.ModifiedDateTime || '';
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

    get(): UserGroupInterface {
        return {
            Name: this.Name,
            Description: this.Description,
            CreatedBy: this.CreatedBy,
            CreatedDateTime: this.CreatedDateTime,
            ModifiedBy: this.ModifiedBy,
            ModifiedDateTime: this.ModifiedDateTime
        };
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
        if (!this.Name) throw new ResponseClass(ResStatus.BadRequest, UserGroupMessage.NAME_REQUIRED);
        this.validateDescription(this.Description);
    }

    modified(): void {
        this.validate();
        this.ModifiedDateTime = this.getDateTime();
    }

    /**
     * Check if the user Group already exists
     * @param Name
     * @param RecId
     */
    async checkExists(Name: string = this.Name, RecId: number = this.RecId || 0): Promise<void> {
        const result = (await this.getWithColumns(Collections.UserGroup, { Name, RecId }, { "RecId": 1 }, "OR")) as unknown as UserGroupInterface;
        if (result !== undefined && result.RecId) throw new ResponseClass(ResStatus.BadRequest, UserGroupMessage.ALREADY_EXISTS);
    }

    /**
     * Check if the user Group does not exist
     * @param Name
     * @param RecId
     */
    async checkNotExists(Name: string = this.Name, RecId: number = this.RecId || 0): Promise<void> {
        const result = (await this.getWithColumns(Collections.UserGroup, { Name, RecId }, { "RecId": 1 }, "OR")) as unknown as UserGroupInterface;
        if (!result.RecId) throw new ResponseClass(ResStatus.BadRequest, UserGroupMessage.NOT_FOUND);
    }

    /**
     * Insert the user Group
     */
    async insert(): Promise<void> {
        this.modified();
        this.CreatedDateTime = this.ModifiedDateTime;
        await this.insertOneWithOutput(Collections.UserGroup, this.get(), { "RecId": 1 })
    }

    /**
     * Update the user Group
     */
    async update(): Promise<void> {
        this.modified();
        await this.updateOne(Collections.UserGroup, { RecId: this.RecId }, this.get());
    }

    /**
     * Delete the user Group
     */
    async delete(): Promise<void> {
        await this.deleteOne(Collections.UserGroup, { RecId: this.RecId });
    }

    /**
     * Get the user Group
     * @param Name
     */
    async getGroup(Name: string): Promise<UserGroupInterface> {
        await this.connectDb();
        return (await this.getWithColumns(Collections.UserGroup, { Name }, { "RecId": 1 })) as unknown as UserGroupInterface;
    }
}

export default UserGroup;