import {Movie} from './movie.model';

export class ResponseMovie{
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
}
