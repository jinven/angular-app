import { Injectable, ApplicationRef } from '@angular/core'
import { ReplaySubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginRxjsService {
    private loginState: ReplaySubject<boolean> = new ReplaySubject<boolean>();
    public getLogin(): Observable<boolean> {
        return this.loginState;
    }
    public setLogin(state: boolean) {
        window.localStorage.setItem('logined', state ? 'true' : 'false')
        this.loginState.next(state)
    }
    constructor(private ref: ApplicationRef) {
        if(window.localStorage.getItem('logined')==='true'){
            this.setLogin(true);
        }
    }
}