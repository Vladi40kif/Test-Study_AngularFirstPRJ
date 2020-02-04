export class Comment{

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

	public SetUsername(str: string) {
		this.username = str;
	}

	public SetText(str: string) {
		this.text = str;
	}
}