import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OperationComponent} from './operation/operation.component';
import {NgxChildProcessModule} from 'ngx-childprocess';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RepoListComponent } from './app/repo-list/repo-list.component';
import { RepoListItemComponent } from './repo-list/repo-list-item/repo-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    OperationComponent,
    RepoListComponent,
    RepoListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChildProcessModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
