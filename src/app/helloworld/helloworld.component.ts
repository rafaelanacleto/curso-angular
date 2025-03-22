import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  template: '<h1>Hello {{name}}!</h1>',
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
