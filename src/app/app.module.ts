import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from "angular-progress-bar"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { MainTestComponent } from './main-test/main-test.component';
import { AddCommentComponent } from './comments-list/add-comment/add-comment.component';
import { ShowCommentComponent } from './comments-list/show-comment/show-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsListComponent,
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
