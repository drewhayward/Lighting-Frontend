import { Component, OnInit } from '@angular/core';

import { LightSwitched } from '../lightSwitched';

import { LightControllerService } from '../light-controller.service'

@Component({
  selector: 'app-light-switches',
  templateUrl: './light-switches.component.html',
  styleUrls: ['./light-switches.component.css']
})
export class LightSwitchesComponent implements OnInit {
  lights: LightSwitched[];

  constructor(private controllerService: LightControllerService) { }

  ngOnInit() {
    this.controllerService.getSwitchedLightsState().subscribe(res => this.lights = res);
  }

  onToggle(toggled: LightSwitched){
    this.controllerService.setLightState(toggled.key, !toggled.state);
  }
}
