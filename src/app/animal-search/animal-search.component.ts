import { AnimalResponseJson } from '../services/json/animal-reponse-json';
import { ContactDialogComponent } from '../shared/contact-dialog/contact-dialog.component';
import { FilterAnimalDto } from '../shared/dto/filter-animal';
import { Sex } from '../shared/enums/sex.enum';
import { Size } from '../shared/enums/size.enum';
import { Specie } from '../shared/enums/specie.enum';
import { AnimalService } from './../services/animal-service.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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

  dialog: MatDialog;


  constructor(animalService: AnimalService,
              dialog: MatDialog) {
    this.animalService = animalService;
    this.dialog = dialog;
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

  openDialog(): void {
    this.dialog.open(ContactDialogComponent, {
      width: '400px',
    });
  }
}
