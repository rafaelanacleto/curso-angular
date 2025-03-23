import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  template: '<div class="container"><h1 class="text-center">Olá, Bootstrap 5!</h1><button class="btn btn-primary">Clique aqui</button></div>',
    styleUrl: './helloworld.components.scss'
})
export class HelloWorldComponent {
  @Input() name: string;

  constructor() {
    this.name = 'Rafael';
  }

  ngOnInit() {
    console.log('HelloWorldComponent initialized');
  }
}
