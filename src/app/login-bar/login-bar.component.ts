import { Component, OnInit } from '@angular/core';

import { LightControllerService } from '../light-controller.service'

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.css']
})
export class LoginBarComponent implements OnInit {
  password: string;
  msg: string;

  constructor(private controllerService: LightControllerService) { }

  ngOnInit() {
    this.msg = this.controllerService.status;
  }

}
