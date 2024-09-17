import Connection from "./Connection";
import { v4 as uuidv4 } from "uuid";
import Validations from "./Validations";
import ResponseClass from "./Response";
import ResStatus from "../Config/ResStatus";
import CommonMessage from "../Config/response/CommonMessage";
import andConverter from "../Utills/AndConverter";
import orConverter from "../Utills/OrConverter";

class Start extends Validations {
  protected connect: Connection = new Connection();

  /**
   * Connect Database
   */
  async connectDb() {
    await this.connect.connect();
  }

  /**
   * Generate Id
   * @returns
   */
  generateId() {
    return uuidv4();
  }

  /**
   * Get Date Time
   */
  getDateTime() {
    return new Date().toISOString().slice(0, 19).replace("T", " ");
  }

  /**
   * Add Days
   * @param date
   * @param days
   * @returns
   */
  addDays(date: string, days: number) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString().slice(0, 19).replace("T", " ");
  }

  /**
   * Delete One
   * @description Delete one document from the collection
   * @param collection
   * @param query
   */
  async deleteOne(collection: string, query: any, operator: string = "OR") {
    try {
      await this.connect.start();
      await this.connect.getDb().collection(collection).deleteOne(
        operator === "AND" ? andConverter(query) : orConverter(query)
      );
      await this.connect.commit();
    } catch (error: any) {
      await this.connect.abort();
      if (error instanceof ResponseClass) {
        throw error;
      }
      throw new ResponseClass(
        ResStatus.InternalServerError,
        CommonMessage.InternalServerError
      );
    }
  }

  /**
   * Insert One
   * @description Insert one document into the collection
   * @param collection
   * @param query
   */
  async insertOne(collection: string, query: any) {
    try {
      await this.connect.start();
      await this.connect.getDb().collection(collection).insertOne(query);
      await this.connect.commit();
    } catch (error: any) {
      await this.connect.abort();
      if (error instanceof ResponseClass) {
        throw error;
      }
      throw new ResponseClass(
        ResStatus.InternalServerError,
        CommonMessage.InternalServerError
      );
    }
  }

  /**
   * Insert One With Output
   * @description Insert one document into the collection and return the inserted document
   * @param collection
   * @param query
   * @param columns
   */
  async insertOneWithOutput(collection: string, query: any, columns: any) {
    try {
      await this.connect.start();
      let result = await this.connect.getDb().collection(collection).insertOne(query)
        .then(async (data) => {
          return await this.connect.getDb().collection(collection).findOne({ _id: data.insertedId }
            , {
              projection: {
                _id: 0,
                ...columns
              }
            })
        })
        .catch((error) => {
          throw new ResponseClass(
            ResStatus.InternalServerError,
            CommonMessage.InternalServerError
          );
        });
      await this.connect.commit();
      return result as any;
    } catch (error: any) {
      await this.connect.abort();
      if (error instanceof ResponseClass) {
        throw error;
      }
      throw new ResponseClass(
        ResStatus.InternalServerError,
        CommonMessage.InternalServerError
      );
    }
  }


  /**
   * Update One
   * @description Update one document in the collection
   * @param collection
   * @param query
   * @param updateQuery
   * @param operator
   */
  async updateOne(collection: string, query: any, updateQuery: any, operator: string = "OR") {
    try {
      await this.connect.start();
      await this.connect.getDb().collection(collection).updateOne(
        operator === "AND" ? andConverter(query) : orConverter(query)
        , {
          $set: updateQuery
        });
      await this.connect.commit();
    } catch (error: any) {
      await this.connect.abort();
      if (error instanceof ResponseClass) {
        throw error;
      }
      throw new ResponseClass(
        ResStatus.InternalServerError,
        CommonMessage.InternalServerError
      );
    }
  }

  /**
   * Get With Columns
   * @description Get with columns from the collection
   * @param collection
   * @param query
   * @param columns
   */
  async getWithColumns(collection: string, query: any, columns: any, operator: string = "OR") {
    try {
      let data = await this.connect.getDb().collection(collection).findOne(
        operator === "AND" ? andConverter(query) : orConverter(query),
        {
          projection: {
            _id: 0,
            ...columns
          }
        }
      )
      if(!data) return {}
      return data as any;

    } catch (error: any) {
      throw new ResponseClass(
        ResStatus.InternalServerError,
        CommonMessage.InternalServerError
      );
    }
  }

  /**
   * Get One
   * @description Get one document from the collection
   * @param collection
   * @param query
   */
  async getOne(collection: string, query: any, operator: string = "OR") {
    try {
      return (await this.connect.getDb().collection(collection).find(
        Object.keys(query).length === 0 ? {} :
          operator === "AND" ? andConverter(query) : orConverter(query)
      ).project({ _id: 0 }).limit(1).toArray())[0];
    } catch (error: any) {
      throw new ResponseClass(
        ResStatus.InternalServerError,
        CommonMessage.InternalServerError
      );
    }
  }

  /**
   * Get All
   * @description Get all documents from the collection
   * @param collection
   * @param query
   */
  async getAll(collection: string, query: any, operator: string = "OR") {
    try {
      return await this.connect.getDb().collection(collection).find(
        Object.keys(query).length === 0 ? {} :
          operator === "AND" ? andConverter(query) : orConverter(query)
      ).project({ _id: 0 }).toArray();
    } catch (error: any) {
      throw new ResponseClass(
        ResStatus.InternalServerError,
        CommonMessage.InternalServerError
      );
    }
  }

  /**
   * Get All With Columns
   * @description Get all documents with columns from the collection
   * @param collection
   * @param query
   * @param columns
   * @param operator
   */
  async getAllWithColumns(collection: string, query: any, columns: any, operator: string = "OR") {
    try {
      return await this.connect.getDb().collection(collection).find(
        Object.keys(query).length === 0 ? {} :
          operator === "AND" ? andConverter(query) : orConverter(query)
      ).project({ _id: 0, ...columns }).toArray();
    } catch (error: any) {
      console.log(error);
      throw new ResponseClass(
        ResStatus.InternalServerError,
        CommonMessage.InternalServerError
      );
    }
  }


  /**
   * Flush
   */
  flush() {
    this.connect.close();
  }
}

export default Start;
