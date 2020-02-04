import { Input, Component, OnInit, Output } from '@angular/core';
import { Comment } from './comment';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

	public Coments: Array<Comment> = []; 
	private CommentFlag: boolean;
	private CommentButtonText: string;

	addComment(newComment:Comment){
		this.Coments.push(newComment);
	}

	public GetCommentFlagState():boolean{
		return this.CommentFlag;
	}

	public GetButtonText():string{
		return this.CommentButtonText;	
	}

	public ShowCommentButtonClick(){
		this.CommentFlag = !this.CommentFlag;
		this.CommentButtonText = !this.CommentFlag ? "SHOW" : "HIDE";
	}

	constructor() {
		this.initComent();
		this.CommentFlag = true;
		this.ShowCommentButtonClick();
	}

	ngOnInit() {  }

	initComent(){
		// server sql))))
		this.Coments.push(new Comment("dima","ja loh"));		
		this.Coments.push(new Comment("gavrylo","bojan"));		
		this.Coments.push(new Comment("inokentiy","norm"));
	}

}


