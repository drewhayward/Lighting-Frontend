import { Component, OnInit, Input } from '@angular/core';
import { LightStrip } from '../lightStrip';

import { LightControllerService } from '../light-controller.service'

@Component({
  selector: 'app-strip-controller',
  templateUrl: './strip-controller.component.html',
  styleUrls: ['./strip-controller.component.css']
})
export class StripControllerComponent implements OnInit {
  @Input() lightStrip: LightStrip;

  constructor(
    private controllerService : LightControllerService
  )
  {
  }

  updateStrip(): void {
    this.controllerService.setStripColor(this.lightStrip.key, this.lightStrip.color);
  }

  ngOnInit() {
    
  }

}
