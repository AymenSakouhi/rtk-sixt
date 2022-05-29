import { offer } from "../models/offer.model";

export interface apiData {
    offers :  (offer)[]; // the apiData will contain a table of offers stored in the offers attribute.
}