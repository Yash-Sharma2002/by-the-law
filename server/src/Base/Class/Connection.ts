import {
  MongoClient,
  MongoNetworkError,
  MongoNetworkTimeoutError,
  MongoServerSelectionError,
} from "mongodb";
import CommonMessage from "../Config/response/CommonMessage";
import ResStatus from "../Config/ResStatus";
import ResponseClass from "./Response";
import dotenv from "dotenv";

dotenv.config({ path: "data.env" });

/**
 * Connection class
 */
class Connection {



  private client: MongoClient;
  private session: any;
  private transaction: any;






  constructor() {
    this.client = new MongoClient(process.env.DB_URL as string);
  }

  /**
   * Connect to the database
   */
  async connect() {
    try {
      await this.client.connect();
    } catch (error: any) {
      if (
        error instanceof MongoServerSelectionError ||
        error instanceof MongoNetworkError ||
        error instanceof MongoNetworkTimeoutError
      ) {
        throw new ResponseClass(
          ResStatus.ConnectionError,
          CommonMessage.ConnectionError
        );
      } else {
        throw new ResponseClass(
          ResStatus.InternalServerError,
          CommonMessage.InternalServerError
        );
      }
    }
  }

  /**
   * Get Database
   */
  getDb() {
    return this.client.db(process.env.DB_NAME as string);
  }



  /**
   * Get the connection
   */
  get() {
    return this.client;
  }

  // /**
  //  * Run the query
  //  * @param query
  //  */
  // async query(query: string) {
  //   try {
  //     console.log(query);
  //     const result = await this.client.query(query);
  //     return result.recordset;
  //   } catch (error: any) {
  //     throw new ResponseClass(
  //       ResStatus.InternalServerError,
  //       CommonMessage.InternalServerError
  //     );
  //   }
  // }

  /**
   * Close the connection
   */
  async close() {
    await this.client.close();
  }

  /**
   * Set Database Session
   */
  async start() {
    this.session = this.client.startSession();
    this.transaction = this.session.startTransaction();
  }

  /**
   * Commit Transaction
   */
  async commit() {
    this.session.commitTransaction();
    this.session.endSession();
  }

  /**
   * Abort Transaction
   */
  async abort() {
    this.transaction.abortTransaction();
    this.session.endSession();
  }
}

export default Connection;
