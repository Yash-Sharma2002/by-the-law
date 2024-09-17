/**
 * BusUnitValueSetMessage
 * @export BusUnitValueSetMessage
 * @enum {string}
 */
enum BusUnitValueSetMessage {
  CREATED = "BusUnitValueSet created",
  UPDATED = "BusUnitValueSet updated",
  DELETED = "BusUnitValueSet deleted",
  NOT_FOUND = "BusUnitValueSet not found",
  ALREADY_EXISTS = "BusUnitValueSet already exists",
  UNIT_NAME_REQUIRED = "UnitName is required",
  VALUE_SET_REQUIRED = "ValueSet is required",
}

export default BusUnitValueSetMessage;
