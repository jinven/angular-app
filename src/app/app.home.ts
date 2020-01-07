import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangRxjsService } from './services/lang.rxjs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.home.html',
  styleUrls: ['./app.home.scss'],
})
export class AppHome {
  constructor(private translate: TranslateService, private langRxjs: LangRxjsService){
    this.langRxjs.getLang().subscribe((lang: string) => {
      this.translate.setDefaultLang(lang)
      this.translate.use(lang);
    });
  }
}
