import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MaterialModule } from './material';
import { HomeComponent } from './components/home-component/home-component.component';
import { ExploreComponent } from './components/explore/explore.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'explore', component: ExploreComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ExploreComponent,
  ],
  imports: [
    BrowserModule,
    ParticlesModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
