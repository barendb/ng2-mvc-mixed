import {NgModule} from '@angular/core'

import {BrowserModule} from "@angular/platform-browser";

import {HomeComponent} from './components/home/home.component';
import {MissionControlComponent} from './components/missioncontrol/missioncontrol.component';
import {AstronautComponent} from './components/astronaut/astronaut.component';
import {PartialComponent} from './components/partial/partial.component';
import {AppComponent} from "./components/app.component";


import {MissionService} from "./services/mission.service";

@NgModule({
	declarations: [AppComponent, HomeComponent, PartialComponent, MissionControlComponent, AstronautComponent],
	imports: [BrowserModule],
	providers: [MissionService],
	bootstrap: [AppComponent]
})
export class AppModule {

}
 