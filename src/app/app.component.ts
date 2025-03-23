import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraComponent } from "./calculadora/calculadora.component";
import { CalcFormComponent } from "./calc-form/calc-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculadoraComponent, CalcFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
