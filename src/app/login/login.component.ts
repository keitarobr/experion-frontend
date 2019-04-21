import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthControllerService } from '../api/services';

@Component({
  selector: 'exp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form;
  
  constructor(private fb: FormBuilder, private myRoute: Router, private auth: AuthService, private authBackend: AuthControllerService) {
    this.form = fb.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    if (this.form.valid) {
      this.authBackend.signinUsingPOST({username: this.form.value.email, password: this.form.value.password}).subscribe(resp => 
        {
          let data : any = resp;
          console.log(data);
          if (data.token) {
            this.auth.sendToken(data.token)
            this.myRoute.navigate(["expertise-browser"]);
          } else {
            this.myRoute.navigate(["login"]);
          }
        }
        );      
      
    }
  }
}
