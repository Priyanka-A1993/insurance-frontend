import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Policy } from './policy';


@Injectable({
  providedIn: 'root',
})
export class PolicyService {

  constructor(private http:HttpClient) {}
  private serviceUrl = 'http://localhost:8080/v1/insuranceapi/';

  
  addToCart(policy: Object,userid): Observable<Object> {
    return this.http.post(`${this.serviceUrl}/addItem/${userid}`, policy);
  }
  public getProductList(): Observable<Policy[]> {
    return this.http.get<Policy[]>(`${this.serviceUrl}/getpolicies`);
  }

 
}
