import { AnimalResponseJson } from '../services/json/animal-reponse-json';
import { FilterAnimalDto } from '../shared/dto/filter-animal';
import { Sex } from '../shared/enums/sex.enum';
import { Size } from '../shared/enums/size.enum';
import { Specie } from '../shared/enums/specie.enum';
import { AnimalService } from './../services/animal-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animal-search',
  templateUrl: './animal-search.component.html',
  styleUrls: ['./animal-search.component.scss']
})
export class AnimalSearchComponent {
  specie = Specie;
  selectedSpecies?: Specie;

  size = Size;
  selectedSize?: Size;

  sex = Sex;
  selectedSex?: Sex;
  
  animalService: AnimalService;
  animals: AnimalResponseJson[] = [];


  constructor(animalService: AnimalService) {
    this.animalService = animalService;
  }

  applyFilters() {
    const filter: FilterAnimalDto = {
      specie: this.selectedSpecies,
      size: this.selectedSize,
      sex: this.selectedSex,
      page: 0,
      pageSize: 10
    }

    this.animalService.findByFilter(filter).subscribe(resp => {
      this.animals = resp.content;      
    })
  }
}
