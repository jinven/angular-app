import { Injectable, ApplicationRef } from '@angular/core'
import { ReplaySubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginRxjsService {
    private loginState: ReplaySubject<boolean> = new ReplaySubject<boolean>(0);
    public getOutput(): Observable<boolean> {
        return this.loginState;
    }
    public setOutput(state: boolean) {
        this.loginState.next(state)
    }
    constructor(private ref: ApplicationRef) {}
}