// order.model.ts

export class Order {
  orderId: number;
  items: any[]; // You can use a specific item type or interface here
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  // Add more properties as needed

  constructor(
    orderId: number,
    items: any[], // Replace 'any[]' with the appropriate type/interface for items
    customerName: string,
	customerEmail: string,
	customerPhone: string,
    shippingAddress: string
    // Add more parameters as needed
  ) {
    this.orderId = orderId;
    this.items = items;
    this.customerName = customerName;
    this.customerEmail = customerEmail;
    this.customerPhone = customerPhone;
    this.shippingAddress = shippingAddress;
  }
}