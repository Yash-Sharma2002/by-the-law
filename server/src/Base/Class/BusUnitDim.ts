import Collections from "../Config/collections";
import BusUnitDimMessage from "../Config/response/BusUnitDim";
import ResStatus from "../Config/ResStatus";
import BusUnitDimClass, { BusUnitDimInterface } from "../Interface/BusUnitDim";
import ResponseClass from "./Response";
import Start from "./Start";

class BusUnitDim extends Start implements BusUnitDimClass {
  UnitName: string = "";
  Value: string = "";
  RefRecId: number = 0;
  RefTableId: number = 0;
  RecId?: number | undefined;
  CreatedBy: string = "";
  ModifiedBy: string = "";
  ModifiedDateTime?: string | undefined;
  CreatedDateTime?: string | undefined;

  constructor(busUnitDim?: BusUnitDimInterface) {
    super();
    if (busUnitDim) {
      this.setBusUnitDim(busUnitDim);
    } else {
      this.setBlank();
    }
  }

  /**
   *Set Business Unit Dimension
   */

  setBusUnitDim(busUnitDim: BusUnitDimInterface): void {
    this.UnitName = busUnitDim.UnitName || "";
    this.Value = busUnitDim.Value || "";
    this.RecId = busUnitDim.RecId || 0;
    this.RefRecId = busUnitDim.RefRecId || 0;
    this.RefTableId = busUnitDim.RefTableId || 0;
    this.CreatedBy = busUnitDim.CreatedBy || "";
    this.CreatedDateTime = busUnitDim.CreatedDateTime || "";
    this.ModifiedBy = busUnitDim.ModifiedBy || "";
    this.ModifiedDateTime = busUnitDim.ModifiedDateTime || "";
  }

  setBlank(): void {
    this.UnitName = "";
    this.Value = "";
    this.RefRecId = 0;
    this.RefTableId = 0;
    this.RecId = 0;
    this.CreatedBy = "";
    this.CreatedDateTime = "";
    this.ModifiedBy = "";
    this.ModifiedDateTime = "";
  }

  /**
   *Get Business Unit Dimension
   */

  getBusUnitDim(): BusUnitDimInterface {
    return {
      UnitName: this.UnitName,
      Value: this.Value,
      RefRecId: this.RefRecId,
      RefTableId: this.RefTableId,
      CreatedBy: this.CreatedBy,
      CreatedDateTime: this.CreatedDateTime,
      ModifiedBy: this.ModifiedBy,
      ModifiedDateTime: this.ModifiedDateTime,
    };
  }

  //params

  paramUnitName(UnitName: string = this.UnitName): string {
    this.UnitName = UnitName;
    return this.UnitName;
  }

  paramValue(Value: string = this.Value): string {
    this.Value = Value;
    return this.Value;
  }

  paramModifiedBy(ModifiedBy: string = this.ModifiedBy): string {
    this.ModifiedBy = ModifiedBy;
    return this.ModifiedBy;
  }

  paramModifiedDateTime(
    ModifiedDateTime: string = this.ModifiedDateTime || "",
  ): string {
    this.ModifiedDateTime = ModifiedDateTime;
    return this.ModifiedDateTime;
  }

  paramRecId(RecId: number = this.RecId || 0): number {
    this.RecId = RecId;
    return this.RecId;
  }

  paramCreatedBy(CreatedBy: string = this.CreatedBy): string {
    this.CreatedBy = CreatedBy;
    return this.CreatedBy;
  }

  paramCreatedDateTime(
    CreatedDateTime: string = this.CreatedDateTime || "",
  ): string {
    this.CreatedDateTime = CreatedDateTime;
    return this.CreatedDateTime;
  }

  paramRefRecId(RefRecId: number = this.RefRecId): number {
    this.RefRecId = RefRecId;
    return this.RefRecId;
  }

  paramRefTableId(RefTableId: number = this.RefTableId): number {
    this.RefTableId = RefTableId;
    return this.RefTableId;
  }

  /**
   * Validate the Business Unit Dimension
   */
  validate(): void {
    if (!this.UnitName)
      throw new ResponseClass(
        ResStatus.BadRequest,
        BusUnitDimMessage.UNIT_NAME_REQUIRED,
      );

    if (!this.Value)
      throw new ResponseClass(
        ResStatus.BadRequest,
        BusUnitDimMessage.VALUE_REQUIRED,
      );

    if (!this.RefRecId) throw new ResponseClass(ResStatus.BadRequest, BusUnitDimMessage.REF_REC_ID_REQUIRED);
    if (!this.RefTableId) throw new ResponseClass(ResStatus.BadRequest, BusUnitDimMessage.REFTABLEID);
  }

  /**
   * Modify Fields
   */
  modified(): void {
    this.validate();
    this.ModifiedDateTime = this.getDateTime();
  }

  /**
   * Insert BusUnitDim
   */
  async insert(): Promise<void> {
    this.modified();
    this.CreatedDateTime = this.ModifiedDateTime;
    this.RecId = (
      await this.insertOneWithOutput(
        Collections.BusUnitDim,
        this.getBusUnitDim(),
        ["RecId"],
      )
    ).RecId;
  }

  /**
   * Update BusUnitDim
   */
  async update(): Promise<void> {
    this.modified();
    await this.updateOne(
      Collections.BusUnitDim,
      { RecId: this.RecId },
      this.getBusUnitDim(),
    );
  }

  /**
   * Delete BusUnitDim
   */
  async delete(): Promise<void> {
    await this.deleteOne(Collections.BusUnitDim, { RecId: this.RecId });
  }

  /**
   * Delete with Reference
   * @param RefRecId
   * @param RefTableId
   */
  async deleteWithRef(
    RefRecId: number = this.RefRecId,
    RefTableId: number = this.RefTableId,
  ): Promise<void> {
    await this.deleteOne(Collections.BusUnitDim, { RefRecId, RefTableId });
  }

  /**
   * Get BusUnitDim
   * @param RecId
   */

  async get(RecId: number = this.RecId || 0): Promise<BusUnitDimInterface> {
    return (await this.getOne(Collections.BusUnitDim, {
      RecId: RecId,
    })) as unknown as BusUnitDimInterface;
  }

  /**
   * Flush the CustTable
   */
  flush(): void {
    super.flush();
    this.setBlank();
  }
}

export default BusUnitDim;
