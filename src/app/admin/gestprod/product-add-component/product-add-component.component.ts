import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-product-add-component',
  templateUrl: './product-add-component.component.html',
  styleUrls: ['./product-add-component.component.css']
})
export class ProductAddComponentComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  productAddForm!: FormGroup;

  ngOnInit(): void {
    this.productAddForm = this.fb.group({
      nom: [''],
      description: [''],
      image: [''],
      prix: [''],
      categId: [''],
    });
  }
  onAjouter() {
    alert(JSON.stringify(this.productAddForm.value));
  }

}
