/**
 * BusUnitDimMessage
 * @export BusUnitDimMessage
 * @enum {string}
 */
enum BusUnitDimMessage {
  CREATED = "BusUnitDim created",
  UPDATED = "BusUnitDim updated",
  DELETED = "BusUnitDim deleted",
  NOT_FOUND = "BusUnitDim not found",
  ALREADY_EXISTS = "BusUnitDim already exists",
  UNIT_NAME_REQUIRED = "UnitName is required",
  VALUE_REQUIRED = "Value is required",
  REF_REC_ID_REQUIRED = "RefRecId is required",
  REFTABLEID = "RefTableId is required",
}

export default BusUnitDimMessage;
