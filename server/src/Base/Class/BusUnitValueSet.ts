import Collections from "../Config/collections";
import BusUnitValueSetMessage from "../Config/response/BusUnitValueSet";
import ResStatus from "../Config/ResStatus";
import BusUnitValueSetClass, {
  BusUnitValueSetInterface,
} from "../Interface/BusUnitValueSet";
import ResponseClass from "./Response";
import Start from "./Start";

class BusUnitValueSet extends Start implements BusUnitValueSetClass {
  UnitName: string = "";
  ValueSet: string = "";
  RecId: number = 0;
  CreatedBy: string = "";
  ModifiedBy: string = "";
  CreatedDateTime: string = "";
  ModifiedDateTime: string = "";

  constructor(BusUnitValueSet?: BusUnitValueSetInterface) {
    super();
    if (BusUnitValueSet) {
      this.setBusUnitValueSet(BusUnitValueSet);
    } else {
      this.setBlank();
    }
  }

  /**
   *Set Business Unit Value Set
   */

  setBusUnitValueSet(BusUnitValueSet: BusUnitValueSetInterface): void {
    this.UnitName = BusUnitValueSet.UnitName || "";
    this.ValueSet = BusUnitValueSet.ValueSet || "";
    this.RecId = BusUnitValueSet.RecId || 0;
    this.CreatedBy = BusUnitValueSet.CreatedBy || "";
    this.CreatedDateTime = BusUnitValueSet.CreatedDateTime || "";
    this.ModifiedBy = BusUnitValueSet.ModifiedBy || "";
    this.ModifiedDateTime = BusUnitValueSet.ModifiedDateTime || "";
  }

  setBlank(): void {
    this.UnitName = "";
    this.ValueSet = "";
    this.RecId = 0;
    this.CreatedBy = "";
    this.CreatedDateTime = "";
    this.ModifiedBy = "";
    this.ModifiedDateTime = "";
  }

  get(): BusUnitValueSetInterface {
    return {
      UnitName: this.UnitName,
      ValueSet: this.ValueSet,
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

  paramUnitName(UnitName: string = this.UnitName): string {
    this.UnitName = UnitName;
    return this.UnitName;
  }

  paramValueSet(ValueSet: string = this.ValueSet): string {
    this.ValueSet = ValueSet;
    return this.ValueSet;
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
    if (!this.UnitName) throw new ResponseClass(ResStatus.BadRequest, BusUnitValueSetMessage.UNIT_NAME_REQUIRED);
    if (!this.ValueSet) throw new ResponseClass(ResStatus.BadRequest, BusUnitValueSetMessage.VALUE_SET_REQUIRED);
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
  async checkExists(
    UnitName: string = this.UnitName,
    RecId: number = this.RecId || 0,
  ): Promise<void> {
    let result = (await this.getWithColumns(
      Collections.BusUnitValueSet,
      { UnitName: UnitName, RecId: RecId },
      ["RecId"],
      "OR",
    )) as unknown as BusUnitValueSetInterface;
    if (result !== undefined && result.RecId)
      throw new ResponseClass(
        ResStatus.BadRequest,
        BusUnitValueSetMessage.ALREADY_EXISTS,
      );
  }

  /**
   * Check the Business Unit not exists
   * @param Name
   * @param RecId
   */
  async checkNotExists(
    UnitName: string = this.UnitName,
    RecId: number = this.RecId || 0,
  ): Promise<void> {
    let result = (await this.getWithColumns(
      Collections.BusUnitValueSet,
      { UnitName: UnitName, RecId: RecId },
      ["RecId"],
      "OR",
    )) as unknown as BusUnitValueSetInterface;
    if (!result.RecId)
      throw new ResponseClass(
        ResStatus.BadRequest,
        BusUnitValueSetMessage.NOT_FOUND,
      );
  }

  /**
   * Insert the Business Unit
   */
  async insert(): Promise<void> {
    this.modified();
    this.CreatedDateTime = this.ModifiedDateTime;
    this.RecId = (
      await this.insertOneWithOutput(Collections.BusUnitValueSet, this.get(), [
        "RecId",
      ])
    ).RecId;
  }

  /**
   * Update the Business Unit
   */
  async update(): Promise<void> {
    this.modified();
    await this.updateOne(
      Collections.BusUnitValueSet,
      { RecId: this.RecId },
      this.get(),
    );
  }

  /**
   * Delete the Business Unit
   */
  async delete(): Promise<void> {
    await this.deleteOne(Collections.BusUnitValueSet, { RecId: this.RecId });
  }

  /**
   * Get the Business Unit
   * @param Name
   */
  async getGroup(Name: string): Promise<BusUnitValueSetInterface> {
    return (await this.getWithColumns(
      Collections.BusUnitValueSet,
      { Name: Name },
      ["RecId"],
    )) as unknown as BusUnitValueSetInterface;
  }
}

export default BusUnitValueSet;