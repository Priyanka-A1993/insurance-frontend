// TODO: Feature Componetized like CrisisCenter
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PolicyService } from './policy.service';
import { Policy } from './policy';
import { LoginService } from '../login/login.service';



@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {
    policy$: Observable<Policy[]>;
    policies: Policy = new Policy();
    policy: Array<Policy>


  constructor(
    private policyService: PolicyService,
    private loginService: LoginService,
    private route: ActivatedRoute
  ) {
    this.policy=[]
  }

  ngOnInit() {
    this.reloadData();
  }
  addToCart(product): void {
    
    console.log(product);
    this.policies = product;
    this.policyService.addToCart(this.policies,this.loginService.getCustomerId())
        .subscribe( data => {
          window.alert("cart added successfully.");
        });
    
}

reloadData() {
  this.policyService.getProductList().subscribe((productList: Policy[]) => {
    this.policy = productList;
   console.log(this.policy)
  })
}
}