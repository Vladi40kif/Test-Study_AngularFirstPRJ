import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Comment } from '../comment';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
  outputs: ["newCommentEvent"]
})
export class AddCommentComponent implements OnInit {

	public newUser: string;
	public newText: string;

	newCommentEvent = new EventEmitter<Comment>();

	AddCommentButtonClick(){
		this.newCommentEvent.emit(new Comment(this.newUser, this.newText));
	}


  	constructor() { }

  	ngOnInit() {}

}
