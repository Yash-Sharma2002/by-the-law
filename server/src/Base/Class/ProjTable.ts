import Start from "./Start";
import Sequence from "./Sequence";
import Collections from "../Config/collections";
import ResponseClass from "./Response";
import ResStatus from "../Config/ResStatus";
import ProjectsMessage from "../Config/response/ProjTable";
import ProjTableClass, { ProjTableInterface } from "../Interface/ProjTable";
import Client from "./Client";
import SysTableId from "./SysTableId";

class ProjTable extends Start implements ProjTableClass {
    ProjId: string = "";
    Name: string = "";
    Description: string = "";
    StartDate: string = "";
    EndDate: string = "";
    ExtendedDate: string = "";
    Status: number = 0;
    Budget: number = 0;
    CustAccount: number = 0;
    ProjManager: number = 0;
    DlvLocation: number = 0;
    Type: number = 0;
    CreatedBy: string = "";
    ModifiedBy: string = "";
    ModifiedDateTime?: string | undefined;
    CreatedDateTime?: string | undefined;
    RecId?: number | undefined;


    /**
     * Constructor for Projects
     * @param projTable 
     */
    constructor(projTable?: ProjTableInterface) {
        super();
        if (projTable) {
            this.setProjTable(projTable);
        }
        else {
            this.setBlank();
        }
    }

    /**
     * Set the values of the ProjTable as Blank
     */
    setBlank() {
        this.ProjId = "";
        this.Name = "";
        this.Description = "";
        this.StartDate = "";
        this.EndDate = "";
        this.ExtendedDate = "";
        this.Status = 0;
        this.Budget = 0;
        this.CustAccount = 0;
        this.ProjManager = 0;
        this.DlvLocation = 0;
        this.Type = 0;
        this.CreatedBy = "";
        this.ModifiedBy = "";
    }

    /**
     * Set the values of the ProjTable 
     * @param projTable 
     */
    setProjTable(projTable: ProjTableInterface) {
        this.ProjId = projTable.ProjId || "";
        this.Name = projTable.Name || "";
        this.Description = projTable.Description || "";
        this.StartDate = projTable.StartDate || "";
        this.EndDate = projTable.EndDate || "";
        this.ExtendedDate = projTable.ExtendedDate || "";
        this.Status = projTable.Status || 0;
        this.Budget = projTable.Budget || 0;
        this.CustAccount = projTable.CustAccount || 0;
        this.ProjManager = projTable.ProjManager || 0;
        this.DlvLocation = projTable.DlvLocation || 0;
        this.Type = projTable.Type || 0;
        this.CreatedBy = projTable.CreatedBy || "";
        this.ModifiedBy = projTable.ModifiedBy || "";
    }

    /**
     * Get ProjTable
     */
    get(): ProjTableInterface {
        return {
            ProjId: this.ProjId,
            Name: this.Name,
            Description: this.Description,
            StartDate: this.StartDate,
            EndDate: this.EndDate,
            ExtendedDate: this.ExtendedDate,
            Status: this.Status,
            Budget: this.Budget,
            CustAccount: this.CustAccount,
            ProjManager: this.ProjManager,
            DlvLocation: this.DlvLocation,
            Type: this.Type,
            CreatedBy: this.CreatedBy,
            CreatedDateTime: this.CreatedDateTime,
            ModifiedBy: this.ModifiedBy,
            ModifiedDateTime: this.ModifiedDateTime,
        }
    }

    /**
     * Set ProjId
     * @param ProjId
     */
    paramProjId(ProjId: string = this.ProjId) {
        this.ProjId = ProjId;
        return this.ProjId;
    }

    /**
     * Set Name
     * @param Name
     */
    paramName(Name: string = this.Name) {
        this.Name = Name;
        return this.Name;
    }

    /**
     * Set Description
     * @param Description
     */
    paramDescription(Description: string = this.Description) {
        this.Description = Description;
        return this.Description;
    }

    /**
     * Set StartDate
     * @param StartDate
     */
    paramStartDate(StartDate: string = this.StartDate) {
        this.StartDate = StartDate;
        return this.StartDate;
    }

    /**
     * Set EndDate
     * @param EndDate
     */
    paramEndDate(EndDate: string = this.EndDate) {
        this.EndDate = EndDate;
        return this.EndDate;
    }

    /**
     * Set ExtendedDate
     * @param ExtendedDate
     */
    paramExtendedDate(ExtendedDate: string = this.ExtendedDate) {
        this.ExtendedDate = ExtendedDate;
        return this.ExtendedDate;
    }

    /**
     * Set Status
     * @param Status
     */
    paramStatus(Status: number = this.Status) {
        this.Status = Status;
        return this.Status;
    }

    /**
     * Set Budget
     * @param Budget
     */
    paramBudget(Budget: number = this.Budget) {
        this.Budget = Budget;
        return this.Budget;
    }

    /**
     * Set CustAccount
     * @param CustAccount
     */
    paramCustAccount(CustAccount: number = this.CustAccount) {
        this.CustAccount = CustAccount;
        return this.CustAccount;
    }

    /**
     * Set ProjManager
     * @param ProjManager
     */
    paramProjManager(ProjManager: number = this.ProjManager) {
        this.ProjManager = ProjManager;
        return this.ProjManager;
    }

    /**
     * Set DlvLocation
     * @param DlvLocation
     */
    paramDlvLocation(DlvLocation: number = this.DlvLocation) {
        this.DlvLocation = DlvLocation;
        return this.DlvLocation;
    }

    /**
     * Set Type
     * @param Type
     */
    paramType(Type: number = this.Type) {
        this.Type = Type;
        return this.Type;
    }

    /**
     * Set CreatedBy
     * @param CreatedBy
     */
    paramCreatedBy(CreatedBy: string = this.CreatedBy) {
        this.CreatedBy = CreatedBy;
        return this.CreatedBy;
    }

    /**
     * Set CreatedDateTime
     * @param CreatedDateTime
     */
    paramCreatedDateTime(CreatedDateTime: string = this.CreatedDateTime || "") {
        this.CreatedDateTime = CreatedDateTime;
        return this.CreatedDateTime;
    }

    /**
     * Set ModifiedBy
     * @param ModifiedBy
     */
    paramModifiedBy(ModifiedBy: string = this.ModifiedBy) {
        this.ModifiedBy = ModifiedBy;
        return this.ModifiedBy;
    }

    /**
     * Set ModifiedDateTime
     * @param ModifiedDateTime
     */
    paramModifiedDateTime(ModifiedDateTime: string = this.ModifiedDateTime || "") {
        this.ModifiedDateTime = ModifiedDateTime;
        return this.ModifiedDateTime;
    }

    /**
     * Set RecId
     * @param RecId
     */
    paramRecId(RecId: number = this.RecId || 0) {
        this.RecId = RecId;
        return this.RecId;
    }

    /**
     * Check the Project already exists
     * @param ProjId
     * @param RecId
     */
    async checkExists(ProjId: string = this.ProjId, RecId: number = this.RecId || 0): Promise<void> {
        let result = (await this.getWithColumns(Collections.ProjTable, { ProjId: ProjId, RecId: RecId }, {"RecId":1}, "OR")) as unknown as ProjTableInterface;
        if (result !== undefined && result.RecId) throw new ResponseClass(ResStatus.BadRequest, ProjectsMessage.AlreadyExists);
    }

    /**
     * Check the Project not exists
     * @param ProjId
     * @param RecId
     */
    async checkNotExists(ProjId: string = this.ProjId, RecId: number = this.RecId || 0): Promise<void> {
        let result = (await this.getWithColumns(Collections.ProjTable, { ProjId: ProjId, RecId: RecId }, {"RecId":1}, "OR")) as unknown as ProjTableInterface;
        if (!result.RecId) throw new ResponseClass(ResStatus.BadRequest, ProjectsMessage.NotFound);
    }


    /**
     * Validate the Projects
     */
    validate() {
        this.validateName(this.Name);

        // validate date Range
        if (!this.StartDate) throw new ResponseClass(ResStatus.Error, ProjectsMessage.StartDate);
        if (!this.EndDate) throw new ResponseClass(ResStatus.Error, ProjectsMessage.EndDate);
        if (this.StartDate > this.EndDate) throw new ResponseClass(ResStatus.Error, ProjectsMessage.StartDateInvalid);
        if (this.EndDate < this.StartDate) throw new ResponseClass(ResStatus.Error, ProjectsMessage.EndDateInvalid);
        if (!this.CustAccount) throw new ResponseClass(ResStatus.Error, ProjectsMessage.Client);
    }

    /**
     * Modified the Projects
     */
    async modified() {
        this.ModifiedDateTime = this.getDateTime();
        if (!this.ProjId) this.ProjId = await new Sequence().getNext(await new SysTableId().getTableId(Collections.ProjTable));

        if (this.CustAccount) {
            const custTable = await new Client().getCustomerByRecId(this.CustAccount);
            if (!this.ProjManager) this.ProjManager = custTable.Manager;
            // dlv location will be based on the type of the project on future  
            // if (!this.DlvLocation) this.DlvLocation = (await new Location().getPrimaryLocation(this.CustAccount, await new SysTableId().getTableId(Collections.CustTable))).RecId || 0;
        }
        if (!this.ProjManager) throw new ResponseClass(ResStatus.Error, ProjectsMessage.ProjectManager);
        // if (!this.DlvLocation) throw new ResponseClass(ResStatus.Error, ProjectsMessage.DlvLocation);

        // Date Modification
        if (!this.StartDate) this.StartDate = this.getDateTime();
        


        this.validate()
    }



    /**
     * Insert the Projects
     */
    async insert() {
        await this.modified();
        this.CreatedDateTime = this.ModifiedDateTime;
        await this.insertOne(Collections.ProjTable, this.get());
    }

    /**
     * Update the Projects
     */
    async update() {
        await this.modified();
        await this.updateOne(Collections.ProjTable, { ProjId: this.ProjId }, this.get());
    }

    /**
     * Delete the Projects
     * @param RecId
     * @param ProjId
     */
    async delete(RecId: number = this.RecId || 0, ProjId: string = this.ProjId || "") {
        await this.deleteOne(Collections.ProjTable, { ProjId: ProjId, RecId: RecId }, "OR");
    }

    // /**
    //  * Status Change Validation
    //  * @desscription Validate the Status Change
    //  * @param RecId
    //  */
    // async statusChange(RecId: number = this.RecId || 0, Status: number = this.Status) {
    //     try {
    //         await this.connectDb();
    //         let projTable = await this.getWithColumns(Collections.ProjTable, { RecId: RecId }, ["RecId", "Status"]) as ProjTableInterface;
    //         if (!projTable.RecId) throw new ResponseClass(ResStatus.BadRequest, ProjectsMessage.NotFound);
    //         if (projTable.Status > Status) throw new ResponseClass(ResStatus.BadRequest, ProjectsMessage.CannotChangeStatus);


    //         let notificationsRecId = await this.getWithColumns(Collections.Notifications, { RefRecId: RecId, RefTableId: await new SysTableId().getTableId(Collections.ProjTable), Action: 0 }, {"RecId":1}, "AND");
    //         if (notificationsRecId.RecId) throw new ResponseClass(ResStatus.BadRequest, ProjectsMessage.RequestAlreadySent);
    //     }
    //     catch (e: any) {
    //         this.flush();
    //         throw e;
    //     }
    // }


    /**
     * Flush the CustTable
     */
    flush(): void {
        super.flush()
        this.setBlank();
    }
}

export default ProjTable;