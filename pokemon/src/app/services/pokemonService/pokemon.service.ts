import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/enviroment/enviroments';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(environment.API_URL + '/pokemon');
  }
  getPokemonDetails(url: string) {
    return this.http.get(url);
  }
}
