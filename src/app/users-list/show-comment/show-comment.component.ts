import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../comment';

@Component({
  selector: 'app-show-comment',
  templateUrl: './show-comment.component.html',
  styleUrls: ['./show-comment.component.css'],
  inputs: ["comment"]
})
export class ShowCommentComponent implements OnInit {

	public comment:Comment;

  	constructor() { }

  	ngOnInit() {}

}
