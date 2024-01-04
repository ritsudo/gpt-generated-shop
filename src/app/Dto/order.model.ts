// order.model.ts
import { CountItem } from "./countItem.model";

export class Order {
  items: CountItem[]; // You can use a specific item type or interface here
  totalBill: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  orderDate: Date;
  // Add more properties as needed

  constructor(
    items: CountItem[], // Replace 'any[]' with the appropriate type/interface for items
    totalBill: number,
    customerName: string,
  	customerEmail: string,
	  customerPhone: string,
    shippingAddress: string,
    orderDate: Date
    // Add more parameters as needed
  ) {
    this.items = items;
    this.totalBill = totalBill;
    this.customerName = customerName;
    this.customerEmail = customerEmail;
    this.customerPhone = customerPhone;
    this.shippingAddress = shippingAddress;
    this.orderDate = orderDate;
  }
}