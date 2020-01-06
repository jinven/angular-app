import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LoginService } from '../services/login.service'
import { LoginRxjsService } from '../services/loginRxjs.service'

@Component({
  selector: 'app-login',
  templateUrl: 'app.login.html',
  styleUrls: ['app.login.scss']
})
export class AppLogin implements OnInit {
  validateForm: FormGroup;
  errorMessage: string;
  constructor(
    private fb: FormBuilder, 
    private message: NzMessageService,
    private loginService: LoginService,
    private loginRxjsService: LoginRxjsService
  ) { }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if(!this.validateForm.value.userName || !this.validateForm.value.password){
      this.errorMessage = '用户名和密码不能为空';
    } else if(this.validateForm.value.userName!=='admin' || this.validateForm.value.password!=='123456'){
      this.errorMessage = '用户名或密码错误';
    } else {
      this.errorMessage = null;
      this.loginService.toLogin();
      this.loginRxjsService.setOutput(this.validateForm.value.userName);
      this.message.create('success', `登录成功`);
    }
  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }
}
