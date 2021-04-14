import { IsNotEmpty } from 'class-validator';

export class ProductViewModel {
  constructor(sku: string, quantity: number, name: string, createdAt: Date, items: Object, days: number) { 
    this.sku = sku;
    this.quantity = quantity;
    this.name = name;
    this.createdAt = createdAt;
    this.items = items;
    this.days = days
  }

  @IsNotEmpty()
  readonly sku: string;

  @IsNotEmpty()
  readonly quantity: number;

  @IsNotEmpty()
  readonly name: string;

  readonly createdAt: Date;

  readonly items: Object;

  readonly days: number;

}
