import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Item } from '../models/item.model';
import { ItemsService } from '../services/items.service';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-lista-compras',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './lista-compras.component.html',
  standalone: true, //Declara que o componente é independente
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {

  items: Item[] = []; //lista de itens inicia os item com array vazio
  itemForm: FormGroup;
  readonly panelOpenState = signal(false);

  getItems() {
      return this.items;  //retorna a lista de itens
  }

  // //usado só em caso de listas muito grandes
  // trackItems(index: number, item: any) {
  //   console.log('trackItems', item.id);
  //   return item.id;
  // }

  constructor(private itemsService: ItemsService, private formBuilder: FormBuilder) {
    this.itemForm = this.formBuilder.group({
      produto: '',
      quantidade: 0,
      preco: 0
    });
   }

  ngOnInit(): void {
    this.items = this.itemsService.getItems();
  }

  addItem() {
    const item = this.itemForm.value;
   
    this.itemsService.addItems(new Item(this.items.length + 1, item.produto, item.quantidade, item.preco));
    this.items = this.itemsService.getItems();
    this.itemForm.reset();
  }


}
