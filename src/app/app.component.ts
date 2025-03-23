import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from "./helloworld/helloworld.component";
import { MinhaPaginaComponent } from "./minha-pagina/minha-pagina.component";
import { CalculadoraComponent } from "./calculadora/calculadora.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWorldComponent, MinhaPaginaComponent, CalculadoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
