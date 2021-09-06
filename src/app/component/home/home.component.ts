import { Component, OnInit } from '@angular/core';
import { Emitter } from 'src/app/emitters/emitter';
import { UserService } from 'src/app/model/user.service';
import { TokenStorageService } from 'src/app/service/auth/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   info: any;

  constructor(private token: TokenStorageService, private userService: UserService) { }

  ngOnInit(): void {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    }     
  }
}
