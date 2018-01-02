import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LightStrip } from '..lightStrip';
import { LightSwitched } from '..lightSwitched';

@Injectable()
export class LightControllerService {
  // Temporary constant return values
  lightStrips: LightStrip[] = [
    {name:'Bed', key:'bedStrip', color:'#af3000'},
    {name:'Closet', key:'closetStrip', color:'#afff00'},
  ];
  // CONST switchedLights: LightSwitched[] = [
  //   {name: 'Desk Lamp', key='deskLamp', state=1},
  //   {name: 'Standing lamp', key='standingLamp', state=1},
  //   {name: 'Christmas Lights', key='christmas', state=1}
  // ]

  constructor(
    private http: HttpClient
  ) { }


  ngOnInit() {
  }

  setStripColor(key : string, color : string) : void {
    Object this.payload = { strip : key, color : color };
    console.log("Posting to api");
    this.http.post('http://localhost:5000/api/strip/', this.payload).subscribe();
  }

  setLightState(): void {

  }

  getStripsState(): Observable<LightStrip[]>{
    console.log("Fetching LED strip states");
    return of(this.lightStrips);
  }

  getSwitchedLightsState(): Observable<LightSwitched[]>{
    console.log("Fetching switched light states");
    return of(this.switchedLights);
  }

}
