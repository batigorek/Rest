import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { MmenuService } from 'src/app/shared/mmenu.service';
import { Mmenu } from 'src/app/shared/models/mmenu.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  menu: Mmenu[];
  

  constructor(
    private mmenuService: MmenuService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      let menu = this.mmenuService.getAll();
      this.menu = isNullOrUndefined(await menu) ? [] : await menu;
    } catch(err){
      console.log(err);
    }
  }

  onAddMenu() {
    this.router.navigate([this.router.url, 'profile']);
  }

  onLinkMenu(id: number){
    this.router.navigate([this.router.url, 'profile', id]);
  }
}
