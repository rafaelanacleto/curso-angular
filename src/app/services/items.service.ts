import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private items: Item[] = [];

  constructor() {
    this.items.push(new Item(1, 'Pão', 1, 5));
    this.items.push(new Item(2, 'Leite', 1, 3));
    this.items.push(new Item(3, 'Café', 1, 10));
    this.items.push(new Item(4, 'Arroz', 1, 6));
    this.items.push(new Item(5, 'Feijão', 1, 5));
  }

  getItems() {
    return this.items; //retorna a lista de itens
  }

  addItems(item: Item) {
    this.items.push(item);
  }
}
