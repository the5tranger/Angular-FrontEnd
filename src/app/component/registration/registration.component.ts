import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitter } from 'src/app/emitters/emitter';
import { AuthService } from 'src/app/service/auth/auth.service';
import { TokenStorageService } from 'src/app/service/auth/token-storage.service';

const httpOptions = {
  headers: { 'Contetnt-type': 'application/json'},
};

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private http: HttpClient, 
    private tokenStorage: TokenStorageService, 
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.form =this.formBuilder.group({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: '',
        confirmPassword: ''
      })
  }
  
  submit(): void {
    this.authService.register(this.form.getRawValue()).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.roles);
        this.router.navigate(['/home']);
        Emitter.authEmitter.emit(true); 
      });

    console.log(this.form.getRawValue());
  }
}
