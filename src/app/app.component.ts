import {Component} from '@angular/core';
import {Item} from '../model/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ali shop';
  items: Item[] = [];

  constructor() {
    const item1 = new Item('Product Name 1', 333, 'Nullam posuere turpis vel lacinia luctus. ' +
      'Donec in efficitur neque. Curabitur consectetur non ipsum in eleifend', 'https://placeimg.com/200/100');
    const item2 = new Item('Product Name 2', 555, 'Nullam posuere tewrwerurpis vel lacinia luctus. ' +
      'Donec in efficitur neque. Curabitur consectetur non ipsum in eleifend', 'https://placeimg.com/200/100');
    const item3 = new Item('Product Name 3', 756, 'Nullam poswrtwrtwrweruere turpis vel lacinia luctus. ' +
      'Donec in efficitur neque. Curabitur consectetur non ipswerwerwerum in eleifend', 'https://placeimg.com/200/100');
    const item4 = new Item('Product Name 4', 523, 'Nullam posuere turpis vel lacinia luctus. ' +
      'Donec in efficitur neque. Curabitur i8tyrtydhgerwrtqweqdrsdrwtwrwerwerwerwpsum in eleifenqweqwed qweqweqweqw',
      'https://placeimg.com/200/100');
    const item5 = new Item('Product Name 5', 525, 'Nullam posuere', 'https://placeimg.com/200/100');
    this.items.push(item1);
    this.items.push(item2);
    this.items.push(item3);
    this.items.push(item4);
    this.items.push(item5);
  }
}
