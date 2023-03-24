import { Component, OnInit } from '@angular/core';
import questions from './questions.json';

interface Questions {
  name: string;
  questions: Question[];
}

interface Question {
  answers: string [];
  question: string;
  values: boolean[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  jsonQuestions?: any;
  questions: Questions | null = null;
  actualQuestion: Question | null = null;

  chooseAnswer: string | null = null;
  actualIndexQuestion = 0;
  actualAmountOfAswers = 0;

  ifCheck = false;
  counter = 0;

  title = 'IwskDoGrobego';

  ngOnInit() {
    this.jsonQuestions = questions;
    this.questions = this.jsonQuestions;
    this.actualQuestion = this.questions?.questions[this.actualIndexQuestion]!;
  }

  checkAmountOfAnswers(): void {
    this.actualAmountOfAswers = 0;
    this.actualQuestion?.values.forEach((item) => {
      if(item) {
        this.actualAmountOfAswers++;
      }
    })
  }

  checkQuestion(): void {
    this.ifCheck = true;
    this.actualQuestion?.answers.forEach((item, index) => {
      if(item === this.chooseAnswer) {
        this.counter++;
      }
    })
  }

  nextQuestion(): void {
    this.ifCheck = false;
    this.chooseAnswer = null;
    if(this.actualIndexQuestion < this.questions?.questions.length! - 1) {
      this.actualIndexQuestion ++;
    }
    this.actualQuestion = this.questions?.questions[this.actualIndexQuestion]!;
    this.checkAmountOfAnswers();
  }
}
