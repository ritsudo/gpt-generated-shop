// item.model.ts

export class Item {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  // Add more properties as needed

  constructor(id: number, name: string, description: string, price: number, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}