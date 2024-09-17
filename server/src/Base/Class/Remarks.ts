import Collections from "../Config/collections";
import RemarksMessage from "../Config/response/Remarks";
import ResStatus from "../Config/ResStatus";
import RemarksClass, { RemarksInterface } from "../Interface/Remarks";
import ResponseClass from "./Response";
import Start from "./Start";



class Remarks extends Start implements RemarksClass {

    Title: string = "";
    Description: string = "";
    Type: number = 0;
    Image: string = "";
    Video: string = "";
    CreatedBy: string = "";
    ModifiedBy: string = "";
    CreatedDateTime: string = "";
    ModifiedDateTime: string = "";
    RecId: number = 0;
    RefTableId: number = 0;
    RefRecId: number = 0;

    constructor(remarks?: RemarksInterface) {
        super();
        if (remarks) this.setRemarks(remarks);
        else this.setBlank();
    }

    setBlank(): void {
        this.Title = "";
        this.Description = "";
        this.Type = 0;
        this.Image = "";
        this.Video = "";
        this.CreatedBy = "";
        this.ModifiedBy = "";
        this.CreatedDateTime = "";
        this.ModifiedDateTime = "";
        this.RecId = 0;
        this.RefTableId = 0;
        this.RefRecId = 0;
    }

    setRemarks(remarks: RemarksInterface): void {
        this.Title = remarks.Title || "";
        this.Description = remarks.Description || "";
        this.Type = remarks.Type || 0;
        this.Image = remarks.Image || "";
        this.Video = remarks.Video || "";
        this.CreatedBy = remarks.CreatedBy || "";
        this.ModifiedBy = remarks.ModifiedBy || "";
        this.CreatedDateTime = remarks.CreatedDateTime || "";
        this.ModifiedDateTime = remarks.ModifiedDateTime || "";
        this.RecId = remarks.RecId || 0;
        this.RefTableId = remarks.RefTableId || 0;
        this.RefRecId = remarks.RefRecId || 0;
    }

    get(): RemarksInterface {
        return {
            Title: this.Title,
            Description: this.Description,
            Type: this.Type,
            Image: this.Image,
            Video: this.Video,
            CreatedBy: this.CreatedBy,
            ModifiedBy: this.ModifiedBy,
            CreatedDateTime: this.CreatedDateTime,
            ModifiedDateTime: this.ModifiedDateTime,
            RefRecId: this.RefRecId,
            RefTableId: this.RefTableId,
        };
    }

    paramTitle(Title: string = this.Title): string {
        this.Title = Title;
        return this.Title;
    }

    paramDescription(Description: string = this.Description): string {
        this.Description = Description;
        return this.Description;
    }

    paramType(Type: number = this.Type): number {
        this.Type = Type;
        return this.Type;
    }

    paramImage(Image: string = this.Image): string {
        this.Image = Image;
        return this.Image;
    }

    paramVideo(Video: string = this.Video): string {
        this.Video = Video;
        return this.Video;
    }

    paramCreatedBy(CreatedBy: string = this.CreatedBy): string {
        this.CreatedBy = CreatedBy;
        return this.CreatedBy;
    }

    paramModifiedBy(ModifiedBy: string = this.ModifiedBy): string {
        this.ModifiedBy = ModifiedBy;
        return this.ModifiedBy;
    }

    paramCreatedDateTime(CreatedDateTime: string = this.CreatedDateTime): string {
        this.CreatedDateTime = CreatedDateTime;
        return this.CreatedDateTime;
    }

    paramModifiedDateTime(ModifiedDateTime: string = this.ModifiedDateTime): string {
        this.ModifiedDateTime = ModifiedDateTime;
        return this.ModifiedDateTime;
    }

    paramRecId(RecId: number = this.RecId): number {
        this.RecId = RecId;
        return this.RecId;
    }

    paramRefTableId(RefTableId: number = this.RefTableId): number {
        this.RefTableId = RefTableId;
        return this.RefTableId;
    }

    paramRefRecId(RefRecId: number = this.RefRecId): number {
        this.RefRecId = RefRecId;
        return this.RefRecId;
    }

    validate(): void {
        if (this.Title === "") throw new ResponseClass(ResStatus.BadRequest, RemarksMessage.Title);
        if (this.Type === 0 && !this.Description) throw new ResponseClass(ResStatus.BadRequest, RemarksMessage.Des);
        if (this.Type === 1 && !this.Image) throw new ResponseClass(ResStatus.BadRequest, RemarksMessage.Image);
        if (this.Type === 2 && !this.Video) throw new ResponseClass(ResStatus.BadRequest, RemarksMessage.Video);
        if(!this.RefTableId) throw new ResponseClass(ResStatus.BadRequest, RemarksMessage.RefTableId);
        if(!this.RefRecId) throw new ResponseClass(ResStatus.BadRequest, RemarksMessage.RefRecId);
    }

    modified(): void {
        this.validate();
        this.ModifiedDateTime = this.getDateTime();
    }

    async insert(): Promise<void> {
        this.modified();
        this.CreatedDateTime = this.ModifiedDateTime
        this.RecId = (await this.insertOneWithOutput(Collections.Remarks, this.get(), ["RecId"])).RecId
    }

    
    async update(): Promise<void> {
        this.modified();
        await this.updateOne(Collections.Remarks, { RecId: this.RecId }, this.get());
    }

    /**
     * Delete Remarks
     * @param RecId 
     */
    async delete(RecId: number = this.RecId): Promise<void> {
        await this.deleteOne(Collections.Remarks, { RecId: RecId });
    }

    /**
     * Get Remarks
     * @param RecId 
     */
    async getRemarks(RecId: number = this.RecId): Promise<any> {
        return await this.getOne(Collections.Remarks, { RecId: RecId });
    }

    /**
     * Flush Remarks    
     */
    flush(): void {
        super.flush();
        this.setBlank();
    }
}

export default Remarks;