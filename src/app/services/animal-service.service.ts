import { FilterAnimalDto } from './../shared/dto/filter-animal';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalResponseJson } from './json/animal-reponse-json';
import { Page } from '../shared/page';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private apiUrl = 'http://localhost:8080/adopt-pet/animal';

  constructor(private http: HttpClient) { }

  findByFilter(filter: FilterAnimalDto): Observable<Page<AnimalResponseJson>> {
    return this.http.post<Page<AnimalResponseJson>>(`${this.apiUrl}/find-by-filter`, filter);
  }
}
