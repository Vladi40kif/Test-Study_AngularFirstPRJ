//https://www.npmjs.com/package/angular-progress-bar

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-test',
  templateUrl: './main-test.component.html',
  styleUrls: ['./main-test.component.css']
})
export class MainTestComponent implements OnInit {

	private data : Array<StageData> = [];
	public stage : number;

	constructor(){ 

		this.stage = 0;
		this.initStageData();

	}
	ngOnInit() {}

	public getHelpUrl(): string{
		if(this.stage >= this.data.length) throw "index bigest then data array";
		return this.data[this.stage].helpRef; 
	}

	public getQuestion() : string{
		if(this.stage >= this.data.length) throw "index bigest then data array";
		return this.data[this.stage].question; 
	}
	
	public getProgress(): number {
		return Math.round(this.stage / (this.data.length-1) * 100) ;
	}


	public infoButtonActive():boolean{
		return this.getHelpUrl() == null ? true : false;
	}

	navButtonClicked(step : number = 0){
		if(this.stage + (step)  == this.data.length || this.stage + (step) == (-1))
			return;
		this.stage += (step);	
	}

	infoButtonClicked(){
		//redirect
	}

	private initStageData(){
		//hardcode????)))
		this.data.push(new StageData("Ви готові?", null));
		this.data.push(new StageData("Загадайте число від 2 до 10.", "https://en.wikipedia.org/wiki/Number"));
		this.data.push(new StageData("Помножте його на 9.", "https://en.wikipedia.org/wiki/Multiplication"));
		this.data.push(new StageData("Додайте розряди числа між собою. e.g. ваш результат 45, 4+5=9.", "https://en.wikipedia.org/wiki/Addition"));
		this.data.push(new StageData("Відніміть від вашого числа 4.", null));
		this.data.push(new StageData("Виберіть з української абетки букву номер якої відповідає вашому числу.", "https://uk.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B0_%D0%B0%D0%B1%D0%B5%D1%82%D0%BA%D0%B0"));
		this.data.push(new StageData("Виберіть будь-яку країну ЄС яка починається з цієї букви.", "https://uk.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D1%80%D0%B0%D1%97%D0%BD_%D0%84%D0%B2%D1%80%D0%BE%D0%BF%D0%B5%D0%B9%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE_%D0%A1%D0%BE%D1%8E%D0%B7%D1%83"));
		this.data.push(new StageData("На третю букву з назви країни загадайте будь-яку тварину.", null));
		this.data.push(new StageData("Вітаю, ви завершили всі завдання! Тепер мені потрібно вам дещо сказати...", null));
		this.data.push(new StageData("Носороги в Данії не водяться.", null));
	}
}

class StageData {
	question:string; 
	helpRef:string;

	constructor(question:string, helpRef:string) {
		this.init(question, helpRef);
	}

	init(question:string, helpRef:string){
		this.helpRef = helpRef;
		this.question = question;
	}	
}