import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MmenuService } from 'src/app/shared/mmenu.service';
import { Mmenu } from 'src/app/shared/models/mmenu.model';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {

  id: number; 
  menu: Mmenu;
  menuForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private mmenuService: MmenuService,
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
    this.menuForm = new FormGroup({
      name: new FormControl(null,[Validators.required]),
      category: new FormControl(null,[Validators.required]),
      weight: new FormControl(null,[Validators.required]),
      calorie: new FormControl(null,[Validators.required]),
      ingredients: new FormControl(null,[Validators.required]),
      time: new FormControl(null,[Validators.required]),
      price: new FormControl(null,[Validators.required]),
    })
    this.getData();
  }


  async getData() {
    if(!isNullOrUndefined(this.id)) {
      try {
        let menu = this.mmenuService.getOneById(this.id);
        this.menu = await menu;
      } catch(err) {
        console.error(err);
      }
      this.menuForm.patchValue( {
        name: this.menu.name,
        category: this.menu.category,
        weight: this.menu.weight,
        calorie: this.menu.calorie,
        ingredients: this.menu.ingredients,
        time: this.menu.time,
        price: this.menu.price
      })
    }
  }

    async onDelete() {
      try {
        await this.mmenuService.deleteOneById(this.id);
      } catch(err){
        console.error(err);
      }
      this.router.navigate(['/menu']);
    }

    async onSave() {
      if(!isNullOrUndefined(this.id)) {
        try {
          await this.mmenuService.putOne(this.id, this.menuForm.value);
        } catch(err) {
          console.error(err);
        }
      } else {
        try {
          let res = await this.mmenuService.postOne(this.menuForm.value);
          this.router.navigate([this.router.url, res.id]);
          this.getData();
        } catch(err) {
          console.error(err);
        }
      }
    }
}
