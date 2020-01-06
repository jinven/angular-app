import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLogin } from './pages/app.login';
import { AppAbout } from './pages/app.about';

const routes: Routes = [
  {
    path: '',
    component: AppLogin
  },
  {
    path: 'login',
    component: AppLogin
  },
  {
    path: 'about',
    component: AppAbout
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
