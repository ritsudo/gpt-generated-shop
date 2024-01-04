import { AfterContentInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from '../../Dto/order.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements AfterContentInit {
  @ViewChildren('totalPriceElement') yourElements!: QueryList<ElementRef>;

  items = this.cartService.getItems();
  totalBill = 0;

  checkoutForm = this.formBuilder.group({
    fullName: '',
    email: '',
    phone: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngAfterContentInit(): void {
    this.calculateTotalBill();
  }

  calculateTotalBill(): void {
    for (let i = 0; i < this.items.length; i += 1) {
      let itemBill = this.items[i].price * this.items[i].count;
      this.totalBill += itemBill;
    }
  }


  onSubmit(): void {

    let newOrder = new Order(
      this.items,
      this.totalBill,
      this.checkoutForm.value.fullName || 'not specified',
      this.checkoutForm.value.email || 'not specified',
      this.checkoutForm.value.phone || 'not specified',
      this.checkoutForm.value.address || 'not specified',
      new Date(Date.now())
    );

    this.orderService
      .sendOrder(newOrder)
      .subscribe(result => {
        this.cartService.clearCart();
        this.totalBill = 0;
        window.alert('Your order has been submitted');
        this.checkoutForm.reset();
        this.router.navigate(['/']);
      },
      error => {
        window.alert('Error happened when submitting an order. Try again later.');
      });

    
  }
}
