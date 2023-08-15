/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import {
  bootstrapApplication,
  provideProtractorTestingSupport,
} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import routesConfig from './app/routes';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

// const appRoutes: Routes = [];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routesConfig), provideNoopAnimations()],
}).catch((err) => console.error(err));
