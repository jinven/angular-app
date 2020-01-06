import { Component } from '@angular/core';
import { LoginService } from '../services/login.service'
@Component({
  selector: 'app-about',
  template: '<h1>{{aboutPage}}</h1><h2>{{loginState}} - {{this.loginService.isLogin() ? "已登录" : "未登录"}}</h2>',
})
export class AppAbout {
  aboutPage: string = '关于页面';
  loginState: string = '登录状态';
  constructor(private loginService: LoginService) {}
}
