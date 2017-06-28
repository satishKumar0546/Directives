import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { HttpTestComponent } from './httpGet-test/http-test.component';
import { HttpService } from './httpGet-test/http.service';
import { HttpPostService } from './http-post-test/http-post.service';
import { HttpPostTestComponent } from './http-post-test/http-post-test.component';
import { routing } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    HttpTestComponent,
    HttpPostTestComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    RouterModule
  ],
  providers: [HttpService,HttpPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
