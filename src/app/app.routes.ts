import { Routes } from '@angular/router';
import { ProductListComponent } from './layout/product-list/product-list.component';
import { CartComponent } from './layout/cart/cart.component';
import { OrderComponent } from './layout/order/order.component';

export const routes: Routes = [
    {path: '', component: ProductListComponent},
    {path: 'cart', component: CartComponent},
    {path: 'order', component: OrderComponent},
];
