import {Movie} from '../models/movie.model';

export class Artiste{
    popularity: number;
    id: number;
    profile_path: String;
    name: String;
    known_for: Movie[];
}