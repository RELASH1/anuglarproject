import { Injectable } from '@angular/core';
import { Produit } from '../shared/models/produit';
import { CATALOGUE } from '../shared/mock-data/catalogue-produit';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts(): Produit[] {
    return CATALOGUE;
    }
    

}
