import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Product } from "../models/products";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>("assets/products.json");
  }

  findById(id: number) {
    return this.http
      .get<Product[]>("assets/products.json")
      .pipe(map((products) => products.find((product) => product.id === id)));
  }
}
