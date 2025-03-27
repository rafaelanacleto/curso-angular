import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private items: Item[] = [];

  constructor() {
    this.items.push(new Item(1, 'Pão', 1, 5, false));
    this.items.push(new Item(2, 'Leite', 1, 3, false));
    this.items.push(new Item(3, 'Café', 1, 10, false));
  }

  getItems() {
    return this.items; //retorna a lista de itens
  }

  addItems(item: Item) {
    this.items.push(item);
  }
}
