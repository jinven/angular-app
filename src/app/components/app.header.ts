import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { LoginService } from '../services/login.service'
import { LoginRxjsService } from '../services/loginRxjs.service'
import { LangRxjsService } from '../services/lang.rxjs.service'
import { NzMessageService } from 'ng-zorro-antd/message';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

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
  logoutText: string = '';
  loginText: string = '';
  selectedValue = 'zh';
  env = environment.production ? 'production' : 'development';
  constructor(
    private router: Router,
    private message: NzMessageService,
    private loginService: LoginService,
    private loginRxjs: LoginRxjsService,
    private langRxjs: LangRxjsService,
    private translate: TranslateService
  ) {}
  initLoginText(lang: string){
    this.translate.getTranslation(lang).subscribe((ev) => {
      if(ev){
        this.loginText = ev[this.isLogin ? 'logout' : 'nologin']
        this.logoutText = ev[this.isLogin ? 'logout' : 'nologin']
      }
    });
  }
  ngOnInit() {
    this.selectedValue = this.translate.currentLang;
    this.loginRxjs.getLogin().subscribe((state: boolean) => {
      this.isLogin = state;
      this.initLoginText(this.translate.currentLang);
    })
    this.langRxjs.getLang().subscribe((lang: string) => {
      this.initLoginText(lang);
    })
  }
  logout() {
    this.loginService.logout()
    this.loginRxjs.setLogin(false)
    this.message.create('success', `已退出`);
    this.router.navigate(['/login']);
  }
  nzSelected(value: string): void {
    this.translate.use(value)
    this.langRxjs.setLang(value)
  }
}
