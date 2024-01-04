import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { CountItem } from '../../Dto/countItem.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  items = this.cartService.getItems();

  constructor(
    private cartService: CartService
  ) { }

  increaseCount(item: CountItem) {
    const result = this.cartService.increaseCount(item);
    if (result !== 1) {
      window.alert('Error increasing item');
    }
  }

  decreaseCount(item: CountItem) {
    const result = this.cartService.decreaseCount(item);
    if (result !== 1) {
      window.alert('Error decreasing item');
    }
  }

  deleteItem(item: CountItem) {
    const result = this.cartService.deleteItem(item);
    if (result !== 1) {
      window.alert('Error deleting item');
    }
  }

}
