import { offer } from "../models/offer.model";

export interface apiData {
    offers :  (offer)[]; // the apiData will be needed with table of offers stored in the offers attribute.
}