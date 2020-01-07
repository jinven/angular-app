import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppComponent } from './app.component';

// components
import { AppHome } from './app.home';
import { AppHeader } from './components/app.header';
import { AppNav } from './components/app.nav';
import { AppAbout } from './pages/app.about';
import { AppLogin } from './pages/app.login';
import { AppMain } from './pages/app.main';
import { AppLang } from './pages/app.lang';

// services
import { LoginService } from './services/login.service'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, NZ_ICONS, zh_CN } from 'ng-zorro-antd';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// i18n
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [AppHome, AppHeader, AppNav, AppAbout, AppLogin, AppMain, AppLang],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_ICONS, useValue: icons },
    LoginService
  ],
  bootstrap: [AppHome],
})
export class AppModule {
  constructor(router: Router) {}
}

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}
