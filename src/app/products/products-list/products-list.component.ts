import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mproducts } from 'src/app/shared/models/mproducts.module';
import { MproductsService } from 'src/app/shared/mproducts.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Mproducts[];

  constructor(
    private mproductsService: MproductsService,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      let products = this.mproductsService.getAll();
      this.products = isNullOrUndefined(await products) ? [] : await products;
    } catch(err){
      console.log(err);
    }
  }

  onAddProduct() {
    this.router.navigate([this.router.url, 'profile']);
  }

  onLinkProduct(id: number){
    this.router.navigate([this.router.url, 'profile', id]);
  }
}
