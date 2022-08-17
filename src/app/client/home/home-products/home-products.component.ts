import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {
  q = false;

  produit = [];
  r: Produit;
  title = "PRODUCTS";


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  onDetail(d: Produit) {
    alert(d.description);
  }
  onClick(p: Produit): void {
    this.q = true;

    this.r = p
  }


  getProducts(): void {

    this.produit = this.productService.getProducts();
  }

  changeMargin(): void {
    if (this.q == true) {
      this.margin = 'margin-left:0px';
    }

  }

  margin: String;

}
