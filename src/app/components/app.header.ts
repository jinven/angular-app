import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { LoginService } from '../services/login.service'
import { LoginRxjsService } from '../services/loginRxjs.service'
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-header',
  templateUrl: './app.header.html',
  styleUrls: ['./app.header.scss'],
  styles: [
    `
      header{
        padding: 0 10px;
      }
    `
  ]
})
export class AppHeader implements OnInit {
  isLogin: boolean = false;
  logoutText: string = '退出';
  loginText: string = '未登录';
  title = 'my-first-project';
  selectedValue = 'zh';
  env = environment.production ? 'production' : 'development';
  constructor(
    private message: NzMessageService,
    private loginService: LoginService,
    private loginRxjs: LoginRxjsService
  ) {}
  ngOnInit() {
    this.loginRxjs.getOutput().subscribe((state: boolean) => {
      this.isLogin = state;
      this.loginText = state ? '退出' : '未登录'
    })
  }
  logout() {
    this.loginService.logout()
    this.loginRxjs.setOutput(false)
    this.message.create('success', `已退出`);
  }
}
