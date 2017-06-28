import {RouterModule, Routes } from '@angular/router';
import { HttpTestComponent } from './httpGet-test/http-test.component';
import { HttpPostTestComponent } from './http-post-test/http-post-test.component';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
  {
    path: 'get' ,
    component: HttpTestComponent
  },
  {
    path: 'post',
    component: HttpPostTestComponent
  },
  {
    path: '',
    component: AppComponent
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
