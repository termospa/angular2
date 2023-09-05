import { Component, Input } from '@angular/core';
import { Root2 } from './product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {
  @Input()
  product!: Root2; 
}
