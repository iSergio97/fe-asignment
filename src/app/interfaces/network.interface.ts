import { Country } from "./country.interface";

export interface Network {
    id:           number;
    name:         string;
    country:      Country | null;
    officialSite: null | string;
}