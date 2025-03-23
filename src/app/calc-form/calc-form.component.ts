import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './calc-form.component.html',
  styleUrl: './calc-form.component.scss',
})
export class CalcFormComponent {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  calc = (op: string) => {
    console.log(op);
    this.result = this.num1 + this.num2;
  };

  clean = () => {
    this.num1 = 0;
    this.num2 = 0;
    this.result = 0;
  };
}
