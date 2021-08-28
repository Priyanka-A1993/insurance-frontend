// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CustomersService } from './customers.service';
import { Customers } from './customers';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-customers',
  templateUrl: './profile.component.html',
  styleUrls: ['./customers.component.css']
})
export class ProfileComponent implements OnInit {
    profile$: Observable<Customers>;
    customers: Customers = new Customers();
    userInfo : Customers;
   

  constructor(
    private customerService: CustomersService,
    private router: Router,
    private loginservice: LoginService,
   
  ) {}

  ngOnInit() { 
    this.customerService.getCustomerDetails(this.loginservice.getCustomerId()).subscribe((data:Customers)=>{
      this.userInfo=data;
      console.log(this.userInfo);
    })
   

 
  }



}

