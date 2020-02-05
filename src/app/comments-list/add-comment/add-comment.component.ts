import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Comment } from '../comment';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
  outputs: ["newCommentEvent"]
})
export class AddCommentComponent implements OnInit {

	newCommentEvent = new EventEmitter<Comment>();

    @ViewChild("Text", {static: false}) text: ElementRef;
    @ViewChild("Username", {static: false}) username: ElementRef;

	AddCommentButtonClick(newUser:string, newText:string){
        console.log(this.text.nativeElement.value, this.username.nativeElement.value );
        this.newCommentEvent.emit(new Comment(newUser, newText));
	}

	constructor() {}

  	ngOnInit() {}

}
