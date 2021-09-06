import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { RegisterInfo } from './register-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Contetnt-type': 'application/json' }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/auth/login';
  private registerUrl = 'http://localhost:8080/registration';

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  register(info: RegisterInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.registerUrl, info, httpOptions);
  }
  constructor(private http: HttpClient) { }
}
