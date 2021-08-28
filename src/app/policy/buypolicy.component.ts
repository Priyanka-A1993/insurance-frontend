// TODO: Feature Componetized like CrisisCenter
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PolicyService } from './policy.service';
import { Policy } from './policy';
import { PurchasePolicy } from './purchasepolicy';
import { LoginService } from '../login/login.service';



@Component({
  selector: 'app-policy',
  templateUrl: './buypolicy.component.html',
  styleUrls: ['./policy.component.css']
})
export class BuyPolicyComponent implements OnInit {
    policy$: Observable<Policy[]>;
    policies: Policy = new Policy();
    policy: Array<Policy>
    purchaseListpolicy: Array<Policy>
    purchasepolicy: Policy = new Policy();


  constructor(
    private policyService: PolicyService,
    private loginService: LoginService,
    private route: ActivatedRoute
  ) {
    this.policy=[]
    this.purchaseListpolicy=[]
  }

  ngOnInit() {
    this.reloadData();
  }

reloadData() {
  this.policyService.getPolicyList().subscribe((policyList: Policy[]) => {
    this.policy = policyList;
   console.log(this.policy)
  })
}

buyPolicy(spolicy) : void {
  this.purchasepolicy = spolicy;
  console.log(JSON.stringify(this.purchasepolicy));
  console.log(this.loginService.getCustomerId());

  this.policyService.buyPolicy(this.purchasepolicy,this.loginService.getCustomerId())
  .subscribe ( data => {
    window.alert("policy added sucessfully");

  });

}
}