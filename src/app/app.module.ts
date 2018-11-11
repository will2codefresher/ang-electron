import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OperationComponent} from './operation/operation.component';
import {NgxChildProcessModule} from 'ngx-childprocess';

@NgModule({
  declarations: [
    AppComponent,
    OperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChildProcessModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
