import { Component } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Product } from "src/app/shared/models/products";
import { ProductService } from "src/app/shared/services/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products$ = productService.getAllProducts();
  }

  share() {
    window.alert("The product has been shared!");
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
