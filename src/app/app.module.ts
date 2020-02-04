import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from "angular-progress-bar"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { MainTestComponent } from './main-test/main-test.component';
import { AddCommentComponent } from './users-list/add-comment/add-comment.component';
import { ShowCommentComponent } from './users-list/show-comment/show-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    MainTestComponent,
    AddCommentComponent,
    ShowCommentComponent
  ],
  imports: [
    ProgressBarModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
