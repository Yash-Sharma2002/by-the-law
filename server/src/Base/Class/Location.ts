import Collections from "../Config/collections";
import ResStatus from "../Config/ResStatus";
import LocationClass, { LocationInterface } from "../Interface/Location";
import ResponseClass from "./Response";
import Start from "./Start";


class Location extends Start implements LocationClass {
    Address: string = "";
    ZipCode: string = "";
    City: string = "";
    State: string = "";
    Country: string = "";
    Street: string = "";
    District: string = "";
    ModifiedBy: string = "";
    ModifiedDateTime?: string | undefined;
    CreatedDateTime?: string | undefined;
    CreatedBy: string = "";
    RecId?: number | undefined;
    RefRecId: number = 0;
    RefTableId: number = 0;
    IsPrimary: number = 0;

    /**
     * Constructor for Location
     * @param location 
     */
    constructor(location?: LocationInterface) {
        super();
        if (location) {
            this.setLocation(location);
        } else {
            this.setBlank();
        }
    }

    /**
     * Set the values of the Location as Blank
     */
    setBlank() {
        this.Address = "";
        this.ZipCode = "";
        this.City = "";
        this.State = "";
        this.Country = "";
        this.Street = "";
        this.District = "";
        this.ModifiedBy = "";
        this.CreatedBy = "";
        this.ModifiedDateTime = "";
        this.CreatedDateTime = "";
        this.RefRecId = 0;
        this.RefTableId = 0;
        this.IsPrimary = 0;
    }

    // params
    paramAddress(Address: string = this.Address): string {
        this.Address = Address;
        return this.Address;
    }

    paramZipCode(ZipCode: string = this.ZipCode): string {
        this.ZipCode = ZipCode;
        return this.ZipCode;
    }

    paramCity(City: string = this.City): string {
        this.City = City;
        return this.City;
    }

    paramState(State: string = this.State): string {
        this.State = State;
        return this.State;
    }

    paramCountry(Country: string = this.Country): string {
        this.Country = Country;
        return this.Country;
    }

    paramStreet(Street: string = this.Street): string {
        this.Street = Street;
        return this.Street;
    }

    paramDistrict(District: string = this.District): string {
        this.District = District;
        return this.District;
    }

    paramModifiedBy(ModifiedBy: string = this.ModifiedBy): string {
        this.ModifiedBy = ModifiedBy;
        return this.ModifiedBy;
    }

    paramModifiedDateTime(ModifiedDateTime: string = this.ModifiedDateTime || ""): string {
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

    paramCreatedDateTime(CreatedDateTime: string = this.CreatedDateTime || ""): string {
        this.CreatedDateTime = CreatedDateTime;
        return this.CreatedDateTime;
    }

    paramIsPrimary(IsPrimary: number = this.IsPrimary): number {
        this.IsPrimary = IsPrimary;
        return this.IsPrimary;
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
     * Set the values of the Location 
     * @param location 
     */
    setLocation(location: LocationInterface) {
        this.Address = location.Address || "";
        this.ZipCode = location.ZipCode || "";
        this.City = location.City || "";
        this.State = location.State || "";
        this.Country = location.Country || "";
        this.Street = location.Street || "";
        this.District = location.District || "";
        this.ModifiedBy = location.ModifiedBy || "";
        this.CreatedBy = location.CreatedBy || "";
        this.RefRecId = location.RefRecId || 0;
        this.RefTableId = location.RefTableId || 0;
        this.IsPrimary = location.IsPrimary || 0;
    }

    /**
     * Get Location
     */
    getLocation(): LocationInterface {
        return {
            RefRecId: this.RefRecId,
            RefTableId: this.RefTableId,
            IsPrimary: this.IsPrimary,
            Address: this.Address,
            ZipCode: this.ZipCode,
            City: this.City,
            State: this.State,
            Country: this.Country,
            Street: this.Street,
            District: this.District,
            ModifiedBy: this.ModifiedBy,
            ModifiedDateTime: this.ModifiedDateTime,
            CreatedBy: this.CreatedBy,
            CreatedDateTime: this.CreatedDateTime
        }
    }

    /**
     * Validate the Location
     */
    validate(): void {
        this.validatePostalCode(this.ZipCode);
        this.validateCity(this.City);
        this.validateState(this.State);
        this.validateCountry(this.Country);
        this.validateStreet(this.Street);
        this.validateDistrict(this.District);
        if (!this.RefRecId) throw new ResponseClass(ResStatus.BadRequest, "RefRecId is required");
    }

    /**
     * Modify Fields
     */
    modified(): void {
        this.validate();
        this.ModifiedDateTime = this.getDateTime();
        this.Address = this.Street + " ," + this.District + " ," + this.City + " ," + this.State + " ," + this.ZipCode + " ," + this.Country;
    }

    /**
     * Update all primary location to non primary
     * @param RefRecId
     * @param RefTableId 
     */
    async updatePrimaryLocation(RefRecId: number = this.RefRecId, RefTableId: number = this.RefTableId, IsPrimary: number = this.IsPrimary): Promise<void> {
        if (IsPrimary)
            await this.updateOne(Collections.Location, { RefRecId, RefTableId }, { IsPrimary: 0 });
    }

    /**
     * Insert Location
     */
    async insert(): Promise<void> {
        this.modified();
        this.CreatedDateTime = this.ModifiedDateTime;
        this.RecId = (await this.insertOneWithOutput(Collections.Location, this.getLocation(), ["RecId"])).RecId;
    }

    /**
     * Update Location
     */
    async update(): Promise<void> {
        this.modified();
        await this.updateOne(Collections.Location, { RecId: this.RecId }, this.getLocation());
    }

    /**
     * Delete Location
     */
    async delete(): Promise<void> {
        await this.deleteOne(Collections.Location, { RecId: this.RecId });
    }

    /**
     * Delete with Reference
     * @param RefRecId
     * @param RefTableId
     */
    async deleteWithRef(RefRecId: number = this.RefRecId, RefTableId: number = this.RefTableId): Promise<void> {
        await this.deleteOne(Collections.Location, { RefRecId, RefTableId });
    }

    /**
     * Get Location
     * @param RecId
     */
    async get(RecId: number = this.RecId || 0): Promise<LocationInterface> {
        return (await this.getOne(Collections.Location, { RecId: RecId })) as unknown as LocationInterface;
    }

    /**
     * Get Primary Location
     * @param RefRecId
     * @param RefTableId
     */
    async getPrimaryLocation(RefRecId: number = this.RefRecId, RefTableId: number = this.RefTableId): Promise<LocationInterface> {
        await this.connectDb();
        let data =  (await this.getOne(Collections.Location, { RefRecId, RefTableId, IsPrimary: 1 }));
        this.flush();
        return data as LocationInterface
    }

    /**
     * Flush the CustTable
     */
    flush(): void {
        super.flush()
        this.setBlank();
    }
}

export default Location;