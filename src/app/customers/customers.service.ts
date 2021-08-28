import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Customers } from './customers';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class CustomersService {

  constructor(private http:HttpClient) {}
  private customerUrl = 'http://localhost:8080/v1/insuranceapi';

  public getCustomers() {
    return this.http.get<Customers[]>(`${this.customerUrl}/customerslist`);
  }
  public customerLogin(email,password) {
    return this.http.get<boolean>(`${this.customerUrl}/customerlogin/${email}/${password}`);
  }
 
  public getCustomerId(email) {
    return this.http.get<Customers>(`${this.customerUrl}/customeremail/${email}`);
  }

 
   createCustomer(customers: Object): Observable<Object> {
    return this.http.post(`${this.customerUrl}/addcustomerdetails`, customers);
  }

  
}
