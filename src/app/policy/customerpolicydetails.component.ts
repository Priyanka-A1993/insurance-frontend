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
  templateUrl: './customerpolicydetails.component.html',
  styleUrls: ['./policy.component.css']
})
export class CustomerPolicyDetailsComponent implements OnInit {
    customerpolicy$: Observable<PurchasePolicy[]>;
    policies: Policy = new Policy();
    customerpurchasepolicy : Array<Policy>
  


  constructor(
    private policyService: PolicyService,
    private loginService: LoginService,
    private route: ActivatedRoute
  ) {
    this.customerpurchasepolicy=[]
  }

  ngOnInit() {
    this.getCustomerPolicyList();
  }

 getCustomerPolicyList(){
  this.policyService.getCustomerPolicyList(this.loginService.getCustomerId()).subscribe((customerPolicyList:Policy[]) => {
    this.customerpurchasepolicy = customerPolicyList;
  });
 }


}