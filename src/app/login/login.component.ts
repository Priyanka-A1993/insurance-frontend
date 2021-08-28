// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Login} from './login';
import { FormBuilder, FormGroup, Validators,FormControl } from "@angular/forms";
import { Customers } from '../customers/customers';
import { CustomersService } from '../customers/customers.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login$: Observable<Login[]>;
    userInfo : Customers;
    user: Customers;
    userDetails: Customers;
    userForm: FormGroup;

  constructor(
    private loginservice: LoginService,
    private userService: CustomersService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
   
   
    
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(8)
          ]]
  })
  
 
  }

  get email() {

    return this.userForm.get('email')
  }
  get encryptedPassword() {
    
    return this.userForm.get('password')
  }
 
  onSubmit() {
  
    if (this.userForm.valid) {
        console.log(this.userForm.value)
        this.user = this.userForm.value

        this.userService.customerLogin(this.user.email, this.user.password)
            .subscribe((flag: boolean) => {
                console.log(flag)
                if (flag) {
                    this.userService.getCustomerId(this.user.email).subscribe((user:Customers)=>{
                        this.userInfo=user;
                        console.log(this.userInfo);
                        this.loginservice.removeCustomerId();
                        this.loginservice.setCustomerId(this.userInfo.customerid);
                    })
                 
                    this.router.navigateByUrl('/home')
                  }
                else {
                  window.alert("Invalid username or password!")
                    this.router.navigateByUrl('/login')
                }

            })
    }

}

  gotoRegistration(){
    this.router.navigate(['/customers']);  // define your component where you want to go
}

}

