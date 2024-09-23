import { AnimalService } from './../services/animal-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animal-search',
  templateUrl: './animal-search.component.html',
  styleUrls: ['./animal-search.component.scss']
})
export class AnimalSearchComponent {
  selectedSize: string = '';
  selectedSex: string = '';
  selectedSpecies = { dog: false, cat: false };
  animalService: AnimalService;

  constructor(animalService: AnimalService) {
    this.animalService = animalService;
  }

  animals = [
    { name: 'Rex', specie: 'Cachorro', size: 'Grande', sex: 'Macho' },
    { name: 'Luna', specie: 'Gato', size: 'Pequeno', sex: 'Fêmea' }
    // Exemplo de animais fictícios
  ];

  applyFilters() {
    // Lógica de filtro (exemplo básico)

    this.animalService.getData().subscribe(resp => {
      console.log('kk', resp);
      
    })

    // this.animals = this.animals.filter(animal => {
    //   return (
    //     (!this.selectedSize || animal.size === this.selectedSize) &&
    //     (!this.selectedSex || animal.sex === this.selectedSex) &&
    //     (this.selectedSpecies.dog && animal.specie === 'Cachorro' || 
    //      this.selectedSpecies.cat && animal.specie === 'Gato')
    //   );
    // });
  }
}
