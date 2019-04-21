import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'exp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private auth : AuthService) { }

  loggedUser() {
    return this.auth.isLoggednIn();
  }

  ngOnInit() {
  }
  
}
