// TODO: Feature Componetized like CrisisCenter
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { PolicyService } from './policy.service';
import { Policy } from './policy';
import { PolicyType } from './policytype';
import { LoginService } from '../login/login.service';



@Component({
  selector: 'app-policy',
  templateUrl: './addpolicy.component.html',
  styleUrls: ['./policy.component.css']
})
export class AddPolicyComponent implements OnInit {
    addpolicy$: Observable<Policy[]>;
    policies: Policy = new Policy();
    ePolicyType = PolicyType;
   

  constructor(
    private policyService: PolicyService,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() { 
  }
  

  addPolicy(): void {
    this.policyService.addPolicy(this.policies)
      .subscribe( data => {
        alert("User Added Policy Successfully.");
        this.router.navigateByUrl('/policy')
      });

  };

}