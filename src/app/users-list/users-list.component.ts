import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

	public Coments: Array<Comment> = []; 
	private CommentFlag: boolean;
	private CommentButtonText: string;

	public newUser:string;
	public newText:string;

	AddCommentButtonClick(){
		this.Coments.push(new Comment(this.newUser, this.newText) );
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


class Comment{

	private username: string;
	private text: string;

	constructor(un: string, text: string){
		this.username = un;
		this.text = text; 	
	}

	public GetUsername(): string {
		return this.username;
	}

	public GetText(): string {
		return this.text;
	}
}