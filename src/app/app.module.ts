import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProgressBarModule} from "angular-progress-bar"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { MainTestComponent } from './main-test/main-test.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    MainTestComponent
  ],
  imports: [
    ProgressBarModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
