import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LightStrip } from './lightStrip';
import { LightSwitched } from './lightSwitched';
import { TokenResponse } from './tokenResponse';

@Injectable()
export class LightControllerService {
  // Temporary constant return values
  header: HttpHeaders;
  url: string;
  token: string;
  status: string;
  lightStrips: LightStrip[] = [
    {name:'Bed', key:'bed', color:'#af3000'},
    {name:'Closet', key:'closet', color:'#afff00'},
  ];
  payload: {};
  switchedLights: LightSwitched[] = [
    {name: 'Desk Lamp', key:'desk', state: true},
    {name: 'Standing lamp', key:'standing', state: true},
    {name: 'Christmas Lights', key:'christmas', state: true}
  ];

  constructor(
    private http: HttpClient
  ) {
    this.status = "Not Logged In";
    this.url = window.location.href;
    if(this.url.search(/localhost/ig) == -1){
      this.url = this.url.substr(0,this.url.length-1);
      this.url = this.url + ":8080/";
    }
    console.log(this.url);
  }


  ngOnInit() {
    // This doesn't run for services!
  }

  setStripColor(key: string, color: string) : void {
    this.header = new HttpHeaders({token: this.token});
    this.payload = { "strip" : key, "color" : color};
    this.http.post(this.url + 'api/strip/', this.payload , { headers:this.header }).subscribe();
  }

  setLightState(key: string, state: boolean): void {
    this.header = new HttpHeaders({token: this.token});
    this.payload = { "light": key, "state": state};
    this.http.post(this.url + 'api/light/', this.payload, { headers: this.header }).subscribe();
  }

  getStripsState(): Observable<LightStrip[]>{
    console.log("Fetching LED strip states");
    return of(this.lightStrips);
  }

  getSwitchedLightsState(): Observable<LightSwitched[]>{
    console.log("Fetching switched light states");
    return of(this.switchedLights);
  }

  getToken(password: string): void {
    this.header = new HttpHeaders({password:password});
    this.http.get<TokenResponse>(this.url + 'api/token/', { headers: this.header})
      .subscribe(result => {
        this.token = result.token;
        this.status = "Logged In";
        console.log("Logged in");
      },
      failure => {
        this.status = "Log in failed";
        console.log("Log in failed");
      }
      );

  }

}
