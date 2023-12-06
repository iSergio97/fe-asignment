import { EpisodeLinks } from "./episode-links.interface";
import { Image } from "./image.interface";
import { Rating } from "./rating.interface";

export interface Episode {
    id:       number;
    url:      string;
    name:     string;
    season:   number;
    number:   number;
    type:     string;
    airdate:  Date;
    airtime:  string;
    airstamp: Date;
    runtime:  number;
    rating:   Rating;
    image:    Image;
    summary:  string;
    _links:   EpisodeLinks;
}