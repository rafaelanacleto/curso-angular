import { Component } from '@angular/core';
import { Form } from "@angular/forms"
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule], // Add FormsModule to imports
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {

  //Declare variables for the calculator class
  display: string = '0';
  currentNumber: number = 0;
  firstOperand: number = 0;
  operator: string = '+';  

  constructor() {}
  
  setDisplay(value: string) {
    if (this.display === '0') {
      this.display = value;
    } else {
      this.display += value;
    }
  }

  setOperation(value: string) {
    this.operator = value;
    this.firstOperand = parseFloat(this.display);
    this.display = '0';
  }

  calculate() {
    let result = 0;
    switch (this.operator) {
      case '+':
        result = this.firstOperand + parseFloat(this.display);
        break;
      case '-':
        result = this.firstOperand - parseFloat(this.display);
        break;
      case '*':
        result = this.firstOperand * parseFloat(this.display);
        break;
      case '/':
        result = this.firstOperand / parseFloat(this.display);
        break;
    }
    this.display = result.toString();
  }

  clear() {
    this.display = '0';
    this.currentNumber = 0;
    this.firstOperand = 0;
    this.operator = '+';
  }

  appendNumber(value: string) {
    if (this.display === '0') {
      this.display = value;
    } else {
      this.display += value;
    }
  }

}
