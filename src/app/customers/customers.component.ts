// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CustomersService } from './customers.service';
import { Customers } from './customers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
    customers$: Observable<Customers[]>;
    customers: Customers = new Customers();
    customer: Customers[];

  constructor(
    private customerService: CustomersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe( data => {
        this.customer = data;
        console.log(this.customer)
      });
  }


  createCustomer(): void {
    this.customerService.createCustomer(this.customers)
        .subscribe( data => {
          alert("User created successfully.");
          this.router.navigateByUrl('/login')
        });

  };
}

