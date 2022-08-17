import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit';
import { CATALOGUE } from '../../../shared/mock-data/catalogue-produit';
@Component({
  selector: 'app-home-product-detail',
  templateUrl: './home-product-detail.component.html',
  styleUrls: ['./home-product-detail.component.css']
})
export class HomeProductDetailComponent implements OnInit {
  @Input() msg: Produit;

  constructor() { }
  title = "PRODUITS";
  produits = CATALOGUE;
  ngOnInit(): void {
  }
  reload(): void {
    window.location.reload();
  }
}
