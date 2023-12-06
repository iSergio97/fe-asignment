import { Embedded } from "./embeded.interface";
import { Externals } from "./externals.interface";
import { Image } from "./image.interface";
import { Links } from "./links.interface";
import { Network } from "./network.interface";
import { Rating } from "./rating.interface";
import { Schedule } from "./schedule.interface";
import { ShowLinks } from "./show-link.interface";
import { WebChannel } from "./web-channel.interface";

export interface Show {
    id:             number;
    url:            string;
    name:           string;
    type:           string;
    language:       string;
    genres:         string[];
    status:         string;
    runtime:        null;
    averageRuntime: number;
    premiered:      Date;
    ended:          null;
    officialSite:   string;
    schedule:       Schedule;
    rating:         Rating;
    weight:         number;
    network:        null;
    webChannel:     WebChannel;
    dvdCountry:     null;
    externals:      Externals;
    image:          Image;
    summary:        string;
    updated:        number;
    _links:         ShowLinks;
    _embedded:      Embedded;
}