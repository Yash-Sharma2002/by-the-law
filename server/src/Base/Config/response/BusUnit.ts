/**
 * BusUnitMessage
 * @export BusUnitMessage
 * @enum {string}
 */
enum BusUnitMessage {
  CREATED = "BusUnit created",
  UPDATED = "BusUnit updated",
  DELETED = "BusUnit deleted",
  NOT_FOUND = "BusUnit not found",
  DESCRIPTION_REQUIRED = "Description is required",
  ALREADY_EXISTS = "BusUnit already exists",
  NAME_REQUIRED = "Name is required",
}

export default BusUnitMessage;
