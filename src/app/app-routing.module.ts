import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLogin } from './pages/app.login';
import { AppAbout } from './pages/app.about';
import { AppMain } from './pages/app.main';
import { AppLang } from './pages/app.lang';

const isLogin = window.localStorage.getItem('logined') === 'true'
const routes: Routes = [
  {
    path: '',
    component: isLogin ? AppMain : AppLogin
  },
  {
    path: 'login',
    component: AppLogin
  },
  {
    path: 'about',
    component: AppAbout
  },
  {
    path: 'home',
    component: AppMain
  },
  {
    path: 'language',
    component: AppLang
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
