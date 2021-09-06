import { Component, OnInit } from '@angular/core';
import { Emitter } from 'src/app/emitters/emitter';
import { TokenStorageService } from 'src/app/service/auth/token-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  authenticated!: boolean;
  roles: string[] | undefined;
  authority: string | undefined;
  
  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    Emitter.authEmitter.subscribe((auth: boolean) => {
      this.authenticated = auth;
    })
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}