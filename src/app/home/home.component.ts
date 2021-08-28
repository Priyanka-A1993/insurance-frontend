// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { HomeService } from './home.service';
import { Home } from './home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    home$: Observable<Home[]>;
    selectedId: number;

  constructor(
    private service: HomeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() { }
  gotoCatalog(){
    this.router.navigate(['/catalog']);  // define your component where you want to go
}

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/