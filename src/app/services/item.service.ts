import { Injectable } from '@angular/core';
import { Item } from '../Dto/item.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  constructor(
    private http: HttpClient
  ) { }

  getItems() {
    return this.http.get<Item[]>('/assets/items.json');
  }
}
