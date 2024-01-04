// countItem.model.ts

export class CountItem {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    count: number;
  
    constructor(id: number, name: string, price: number, imageUrl: string, count: number) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.imageUrl = imageUrl;
      this.count = count;
    }
  }