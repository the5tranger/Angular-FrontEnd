import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './service/auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cool-service-fe';

  ngOnInit() {
}
}