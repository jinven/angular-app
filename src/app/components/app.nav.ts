import { Component, OnInit } from '@angular/core';
import { LoginRxjsService } from '../services/loginRxjs.service'
@Component({
  selector: 'app-nav',
  templateUrl: './app.nav.html',
  styleUrls: ['./app.nav.scss'],
})
export class AppNav implements OnInit {
  isLogin: boolean;
  constructor(
    private loginRxjs: LoginRxjsService
  ) {
    this.loginRxjs.getLogin().subscribe((value: boolean) => {
      this.isLogin = value;
    })
  }
  ngOnInit() {}
}
