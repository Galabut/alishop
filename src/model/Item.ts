export class Item {
  public name: string;
  public price: number;
  public description: string;
  public image: object;


  constructor(name: string, price: number, description: string, image: Object) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
  }
}
