import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root',
})
export class HomeService {

  //constructor(private messageService: MessageService) { }

  btnClick= function () {
    this.router.navigateByUrl('/user');
};
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/