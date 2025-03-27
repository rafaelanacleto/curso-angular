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
  // Você pode ter uma propriedade no componente para controlar a classe
  linhasSelecionadas: boolean[] = [];

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
    // Inicialize o array linhasSelecionadas com o mesmo tamanho de items
    this.linhasSelecionadas = this.items.map(() => false);
   }

  ngOnInit(): void {
    this.items = this.itemsService.getItems();
  }

  addItem() {
    const item = this.itemForm.value;
   
    this.itemsService.addItems(new Item(this.items.length + 1, item.produto, item.quantidade, item.preco, item.selecionado));
    this.items = this.itemsService.getItems();
    this.itemForm.reset();
  }


  onCheckboxChange(event: any, index: number) {
    console.log('Checkbox no índice', index, 'mudou para:', event.target.checked);

    // Atualize o estado do item específico no array 'items'
    if (this.items[index]) {
      this.items[index].selecionado = event.target.checked;
    }

    // Atualize o array que controla a classe CSS para a linha
    this.linhasSelecionadas[index] = event.target.checked;
  }


}
