import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Root2 } from './product/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angular-homework';

  products: Root2[] = [];

  constructor(private _productService: ProductsService) {}
  ngOnInit() {
      this._productService.getProducts().subscribe(resp=>{
        console.log(resp);
      })
  }
}
