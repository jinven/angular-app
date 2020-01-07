import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main',
  template: `<h1>{{'welcome' | translate}}</h1><p><a routerLink="/login" routerLinkActive="active" translate>loginpage</a></p>`,
  styles: [`
    h1, p {
      text-align: center;
    }
  `]
})
export class AppMain implements OnInit {
  constructor() {}
  ngOnInit(){}
}
