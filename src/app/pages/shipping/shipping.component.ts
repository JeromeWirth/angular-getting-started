import { Component } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { CartService } from "src/app/shared/services/cart.service";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"],
})
export class ShippingComponent {
  shippingCosts$!: Observable<{ type: string; price: number }[]>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.shippingCosts$ = this.cartService.getShippingPrices();
  }
}