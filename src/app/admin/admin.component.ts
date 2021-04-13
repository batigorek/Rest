import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  id: number;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { 
    this.activatedRoute.params.subscribe((param) => {
      if (!isNullOrUndefined(param.id)) {
        this.id = +param.id; 
      } else {
        this.id = null;
      }
    });
  }

  ngOnInit(): void {
  }

}
