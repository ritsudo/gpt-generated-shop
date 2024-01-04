import { Injectable } from '@angular/core';
import { CountItem } from '../Dto/countItem.model';
import { Item } from '../Dto/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  countItems: CountItem[] = [];

  addToCart(item: Item) {
    const foundItemIndex = this.countItems.findIndex((newItem) => newItem.id === item.id);

    if (foundItemIndex !== -1) {
      // Item with the same ID already exists
      return -1;
    } else {
      // Item not found, push the new item
      this.countItems.push({
        id: item.id,
        name: item.name,
        price: item.price,
        imageUrl: item.imageUrl,
        count: 1
      });
      return 1;
    }

    return 0;
  }

  increaseCount(item: CountItem) { 
    const foundItemIndex = this.countItems.findIndex((newItem) => newItem.id === item.id);

    if (foundItemIndex !== -1) {
      // Item found
      if (this.countItems[foundItemIndex].count < 9999) {
        this.countItems[foundItemIndex].count += 1;
      }
      return 1;
    } else {
      // Item not found, push the new item
      return -1;
    }
    
    return 0;
  }

  decreaseCount(item: CountItem) { 
    const foundItemIndex = this.countItems.findIndex((newItem) => newItem.id === item.id);

    if (foundItemIndex !== -1) {
      // Item found
      if (this.countItems[foundItemIndex].count > 1) {
        this.countItems[foundItemIndex].count -= 1;
      }
      return 1;
    } else {
      // Item not found, push the new item
      return -1;
    }
    
    return 0;
  }

  deleteItem(item: CountItem) {
    const foundItemIndex = this.countItems.findIndex((newItem) => newItem.id === item.id);

    if (foundItemIndex !== -1) {
      // Item found
      this.countItems.splice(foundItemIndex, 1);
      return 1;
    } else {
      // Item not found, push the new item
      return -1;
    }

    return 0;
  }

  clearCart() {
    this.countItems = [];
    return this.countItems;
  }

  getItemCount() {
    return this.countItems.length;
  }

  getItems() {
    return this.countItems;
  }

  constructor() { }
}
