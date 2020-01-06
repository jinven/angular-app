import { Injectable, ApplicationRef } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private loginState: boolean = false;
    toLogin() {
        this.loginState = true;
    }
    isLogin(): boolean {
        return this.loginState;
    }
    logout() {
        this.loginState = false;
    }
    constructor(private ref: ApplicationRef) {}
}