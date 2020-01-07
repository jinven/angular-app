import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-lang',
  template: `<h1>{{'language' | translate}}</h1>
<div><article>{{'fiction' | translate}}</article></div>`,
  styles: [`
    h1 {
      text-align: center;
    }
    article {
      text-align: left;
      background-color: rgba(222, 222, 222, 0.3);
      color: #1d1d1d;
      font-size: 20px;
      margin: 20px 30px 30px;
      text-shadow: rgba(255, 255, 255, 0.15) 1px 2px;
      border: 1px solid #fff;
      border-radius: 3px;
      padding: 5px 10px;
      box-shadow: rgba(0, 0, 0, 0.26) 0 0 10px 0;
    }
  `]
})
export class AppLang implements OnInit {
  constructor() {}
  ngOnInit(){}
}
