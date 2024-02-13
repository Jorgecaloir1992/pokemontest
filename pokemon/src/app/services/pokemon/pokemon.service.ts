import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../enviroment/enviroments'
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(environment.API_URL + '/users');
  }
}
