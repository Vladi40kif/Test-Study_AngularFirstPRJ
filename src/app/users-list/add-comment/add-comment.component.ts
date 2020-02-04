import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Comment } from '../comment';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
  outputs: ["newCommentEvent"]
})
export class AddCommentComponent implements OnInit {

	newCommentEvent = new EventEmitter<Comment>();

	AddCommentButtonClick(newUser:string, newText:string){
		this.newCommentEvent.emit(new Comment(newUser, newText));
	}


  	constructor() { }

  	ngOnInit() {}

}
