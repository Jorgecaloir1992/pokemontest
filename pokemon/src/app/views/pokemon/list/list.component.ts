import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/pokemonService/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  pokemonList: any[] = [];
  filteredPokemon: any[] = [];
  selectedPokemon: any;
  searchText: string = '';
  alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList(): void {
    this.pokemonService.list().subscribe((data: any) => {
      this.pokemonList = data.results;
      this.filteredPokemon = this.pokemonList;
    });
  }

  filterPokemon(): void {
    if (this.searchText.trim() !== '') {
      this.filteredPokemon = this.pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.filteredPokemon = this.pokemonList;
    }
  }

  selectPokemon(pokemon: any): void {
    this.selectedPokemon = null;
    this.pokemonService.getPokemonDetails(pokemon.url).subscribe((data: any) => {
      this.selectedPokemon = data;
    });
  }

  getPokemonCountByLetter(letter: string): number {
    const filteredByLetter = this.pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().startsWith(letter.toLowerCase())
    );
    return filteredByLetter.length;
  }
}