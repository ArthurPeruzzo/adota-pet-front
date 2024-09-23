import { FilterAnimalDto } from './../shared/dto/filter-animal';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Size } from '../shared/enums/size.enum';
import { Specie } from '../shared/enums/specie.enum';
import { Sex } from '../shared/enums/sex.enum';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private apiUrl = 'http://localhost:8080/adopt-pet/animal';

  constructor(private http: HttpClient) { }

  // Método para fazer uma requisição GET
  getData(): Observable<any> {
    const filter: FilterAnimalDto = {
        size: Size.SMALL,
        specie: Specie.DOG,
        sex: Sex.MALE,
        page: 0,
        pageSize: 10
    }
    return this.http.post(`${this.apiUrl}/find-by-filter`, filter);
  }
}
