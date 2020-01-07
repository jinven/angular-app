import { Injectable } from '@angular/core'
import { ReplaySubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LangRxjsService {
    private lang: ReplaySubject<string> = new ReplaySubject<string>();
    public getLang(): Observable<string> {
        return this.lang;
    }
    public setLang(value: string) {
        window.localStorage.setItem('lang', value)
        this.lang.next(value)
    }
    constructor() {
        let lang = window.localStorage.getItem('lang') || 'zh'
        this.setLang(lang);
        console.log('默认语言：', lang)
    }
}