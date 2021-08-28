import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { PolicyComponent } from './policy.component';


import { PolicyRoutingModule } from './policy-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PolicyRoutingModule
  ],
  declarations: [
    PolicyComponent
 
  ]
})
export class PolicyModule {}
