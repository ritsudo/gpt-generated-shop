import { AfterContentInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements AfterContentInit {
  @ViewChildren('totalPriceElement') yourElements!: QueryList<ElementRef>;

  items = this.cartService.getItems();
  totalBill = 0;
  
  constructor(
    private cartService: CartService
  ) { }

  ngAfterContentInit(): void {
    this.calculateTotalBill();
  }

  calculateTotalBill(): void {
    for (let i = 0; i < this.items.length; i+=1) {
      let itemBill = this.items[i].price * this.items[i].count;
      this.totalBill += itemBill;
    }
  }

}
