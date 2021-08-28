import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



//const homeRoutes: Routes = [
 
  //{ path: 'catalog',  component: CatalogComponent }
  
//];

@NgModule({
  imports: [
    //RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }