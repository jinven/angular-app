import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
@Component({
  selector: 'app-about',
  template: '<h1>{{aboutPage}}</h1><h2>{{loginState | translate}} - {{loginTxt | translate}}</h2>',
})
export class AppAbout implements OnInit {
  aboutPage: string = '';
  loginState: string = 'loginstate';
  loginTxt: string;
  constructor(private loginService: LoginService, private translate: TranslateService) {
    this.loginTxt = this.loginService.isLogin() ? 'logined' : 'nologin'
    if(this.translate.store.translations && this.translate.store.translations[this.translate.currentLang]){
      this.aboutPage = this.translate.store.translations[this.translate.currentLang]['about_page'];
    }
    this.translate.getTranslation(this.translate.currentLang).subscribe((ev) => {
      if(ev && ev.translations){
        this.aboutPage = ev.translations['about_page'];
      }
    });
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
        if(event.translations){
        this.aboutPage = event.translations['about_page'];
      }
    });
  }
  ngOnInit(){}
}
