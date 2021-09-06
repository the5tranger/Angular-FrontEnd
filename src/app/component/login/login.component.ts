import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service'; 
import { TokenStorageService } from 'src/app/service/auth/token-storage.service'; 
import { AuthLoginInfo } from 'src/app/service/auth/login-info'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitter } from 'src/app/emitters/emitter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  loginInfo!: AuthLoginInfo;
  
 
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private formBuilder : FormBuilder, private router: Router) { }
 
  ngOnInit() {
    this.form = this.formBuilder.group( {username: '', password: ''} )
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }
 
  onSubmit() { 
    this.authService.attemptAuth(this.form.getRawValue()).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.roles);
 
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.router.navigate(['/home']);
        Emitter.authEmitter.emit(true); 
      },
      error => {
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }
}
