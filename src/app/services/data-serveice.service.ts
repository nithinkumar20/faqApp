import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable({
  providedIn: 'root'
})
export class DataServeiceService {
  questions:Question[];

  constructor() { 
    /*this.questions = [
      {
        text : "where is your office?",
        answer : "J.P. Nagar",
        hide : true
      },
      {
        text : "how to contact you?",
        answer : "88888888888",
        hide : true
      },
      {
        text : "what is your mail-Id?",
        answer : "jbdfsdg@hjsbf.com",
        hide : true
      }
    ];*/ 
  }

  getQuestion(){
    if(localStorage.getItem('questions')===null){
      this.questions =[]; 
    }else{
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }
//add question to LS
  addQuestion(question:Question){
    
    let questions;
    //check the anythimg is ther in storage or not
    if(localStorage.getItem('questions')===null){
      questions =[];
    }else{
      questions=JSON.parse(localStorage.getItem('questions'));
    }
    //push new question
    questions.unshift(question);
    //set array
    localStorage.setItem('questions',JSON.stringify(questions));

    this.questions.unshift(question);
  }
  
  removeQuestion(question){
    for ( let i=0 ; i <= this.questions.length ; i++){
        if(question== this.questions[i]){
          this.questions.splice(i,1);
          localStorage.setItem('questions',JSON.stringify(this.questions));
      }
    }
  }
}
