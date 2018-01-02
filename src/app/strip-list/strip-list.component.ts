import { Component, OnInit } from '@angular/core';
import { LightStrip } from '../lightStrip';

import { LightControllerService } from '../light-controller.service'

@Component({
  selector: 'app-strip-list',
  templateUrl: './strip-list.component.html',
  styleUrls: ['./strip-list.component.css']
})
export class StripListComponent implements OnInit {
  strips: LightStrip[];
  selectedStrip: LightStrip;
  color: string;
  key: string;

  constructor(private controllerService: LightControllerService) { }

  ngOnInit() {
    this.controllerService.getStripsState().subscribe(strips => this.strips = strips);
  }

  onClick(item : Object): void {
    this.selectedStrip = item;
  }


}
