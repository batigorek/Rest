import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { Mproducts } from 'src/app/shared/models/mproducts.module';
import { MproductsService } from 'src/app/shared/mproducts.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})

export class ProductsEditComponent implements OnInit {

  id: number;
  product: Mproducts;
  productForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private mproductsService: MproductsService,
    private router: Router
  ) { 
    this.activatedRoute.params.subscribe(params => {
      if(!isNullOrUndefined(params.id)) {
        this.id = +params.id;
      } else {
        this.id = null;
      }
    })
  }

  ngOnInit(): void {
    this.productForm = new FormGroup( {
      name: new FormControl(null, [Validators.required]),
      volume: new FormControl(null, [Validators.required]),
      unit: new FormControl(null, [Validators.required]),
      data: new FormControl(null, [Validators.required]),
      until: new FormControl(null, [Validators.required]),
    });
    this.getData();
  }

  async getData() {
    if(!isNullOrUndefined(this.id)) {
      try {
        let product = this.mproductsService.getOneById(this.id);
        this.product = await product;
      } catch(err) {
        console.error(err);
      }
      this.productForm.patchValue( {
        name: this.product.name,
        volume: this.product.volume,
        unit: this.product.unit,
        data: this.product.data,
        until: this.product.until
      })
    }
  }

  async onDelete() {
    try {
      await this.mproductsService.deleteOneById(this.id);
    } catch(err){
      console.error(err);
    }
    this.router.navigate(['/product']);
  }

  async onSave() {
    if(!isNullOrUndefined(this.id)) {
      try {
        await this.mproductsService.putOne(this.id, this.productForm.value);
      } catch(err) {
        console.error(err);
      }
    } else {
      try {
        let res = await this.mproductsService.postOne(this.productForm.value);
        this.router.navigate([this.router.url, res.id]);
        this.getData();
      } catch(err) {
        console.error(err);
      }
    }
  }
}
