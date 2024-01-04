import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../Dto/item.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  constructor(
    private itemService: ItemService,
    private cartService: CartService
  ) {}

  items!: Observable<Item[]>;

  addToCart(item: Item) {
    const result = this.cartService.addToCart(item);
    if (result == 1) {
//      window.alert('Your item ' + item.name + ' has been added to cart! Open the cart to change item count');
    } else if (result == -1) {
      window.alert('Error: item' + item.name + ' is already exists in your cart. Open the cart to change item count and make order');
    } else {
      window.alert('Error adding item');
    }
  }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }
}
