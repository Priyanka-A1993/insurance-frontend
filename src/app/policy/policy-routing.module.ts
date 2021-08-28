import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyComponent } from './policy.component';


const policyRoutes: Routes = [
 
  { path: 'policy', component: PolicyComponent },
  
];

@NgModule({
  imports: [
    RouterModule.forChild(policyRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PolicyRoutingModule { }

