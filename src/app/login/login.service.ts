import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor() { }

  setCustomerId(customerId) {
    sessionStorage.setItem('customerId', customerId)
    console.log(customerId)
    return true;

}

getCustomerId() {
  let customer = sessionStorage.getItem('customerId')
  console.log(customer);
  return customer;
  
}

removeCustomerId() {
  sessionStorage.removeItem('customerId')
}



  btnClick= function () {
    this.router.navigateByUrl('/customers');
};
}
