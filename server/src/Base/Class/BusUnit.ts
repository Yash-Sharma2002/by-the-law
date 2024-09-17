import Collections from "../Config/collections";
import BusUnitMessage from "../Config/response/BusUnit";
import ResStatus from "../Config/ResStatus";
import BusUnitClass, { BusUnitInterface } from "../Interface/BusUnit";
import ResponseClass from "./Response";
import Start from "./Start";

class BusUnit extends Start implements BusUnitClass {
  Name: string = "";
  Description: string = "";
  RecId: number = 0;
  CreatedBy: string = "";
  ModifiedBy: string = "";
  CreatedDateTime: string = "";
  ModifiedDateTime: string = "";

  constructor(busUnit?: BusUnitInterface) {
    super();
    if (busUnit) {
      this.setBusUnit(busUnit);
    } else {
      this.setBlank();
    }
  }

  setBusUnit(busUnit: BusUnitInterface): void {
    this.Name = busUnit.Name;
    this.Description = busUnit.Description;
    this.RecId = busUnit.RecId || 0;
    this.CreatedBy = busUnit.CreatedBy;
    this.CreatedDateTime = busUnit.CreatedDateTime || "";
    this.ModifiedBy = busUnit.ModifiedBy;
    this.ModifiedDateTime = busUnit.ModifiedDateTime || "";
  }

  setBlank(): void {
    this.Name = "";
    this.Description = "";
    this.RecId = 0;
    this.CreatedBy = "";
    this.CreatedDateTime = "";
    this.ModifiedBy = "";
    this.ModifiedDateTime = "";
  }

  get(): BusUnitInterface {
    return {
      Name: this.Name,
      Description: this.Description,
      CreatedBy: this.CreatedBy,
      CreatedDateTime: this.CreatedDateTime,
      ModifiedBy: this.ModifiedBy,
      ModifiedDateTime: this.ModifiedDateTime,
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

  paramModifiedDateTime(
    ModifiedDateTime: string = this.ModifiedDateTime,
  ): string {
    this.ModifiedDateTime = ModifiedDateTime;
    return this.ModifiedDateTime;
  }

  validate(): void {
    if(this.Name === "") throw new ResponseClass(ResStatus.BadRequest, BusUnitMessage.NAME_REQUIRED);
    this.validateDescription(this.Description);
  }

  modified(): void {
    this.validate();
    this.ModifiedDateTime = this.getDateTime();
  }

  /**
   * Check the Business Unit already exists
   * @param Name
   * @param RecId
   */
  async checkExists(Name: string = this.Name, RecId: number = this.RecId || 0): Promise<void> {
    let result = (await this.getWithColumns(Collections.BusUnit, { Name: Name, RecId: RecId }, {"RecId":1}, "OR")) as unknown as BusUnitInterface;
    if (result !== undefined && result.RecId) throw new ResponseClass(ResStatus.BadRequest, BusUnitMessage.ALREADY_EXISTS,);
  }

  /**
   * Check the Business Unit not exists
   * @param Name
   * @param RecId
   */
  async checkNotExists(
    Name: string = this.Name,
    RecId: number = this.RecId || 0,
  ): Promise<void> {
    let result = (await this.getWithColumns(
      Collections.BusUnit,
      { Name: Name, RecId: RecId },
      ["RecId"],
      "OR",
    )) as unknown as BusUnitInterface;
    if (!result.RecId)
      throw new ResponseClass(ResStatus.BadRequest, BusUnitMessage.NOT_FOUND);
  }

  /**
   * Insert the Business Unit
   */
  async insert(): Promise<void> {
    this.modified();
    this.CreatedDateTime = this.ModifiedDateTime;
    this.RecId = (await this.insertOneWithOutput(Collections.BusUnit, this.get(), {"RecId":1})).RecId;
  }

  /**
   * Update the Business Unit
   */
  async update(): Promise<void> {
    this.modified();
    await this.updateOne(Collections.BusUnit, { RecId: this.RecId }, this.get(),
    );
  }

  /**
   * Delete the Business Unit
   */
  async delete(): Promise<void> {
    await this.deleteOne(Collections.BusUnit, { RecId: this.RecId });
  }

  /**
   * Get the Business Unit
   * @param Name
   */
  async getGroup(Name: string): Promise<BusUnitInterface> {
    return (await this.getWithColumns(Collections.BusUnit, { Name: Name }, {"RecId":1})) as unknown as BusUnitInterface;
  }
}

export default BusUnit