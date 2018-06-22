import { Component, OnInit } from '@angular/core';
import { DataServeiceService } from '../../services/data-serveice.service';

import { Question } from '../../models/Question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions:object[];

  constructor(public dataService:DataServeiceService) {
    
   }

  ngOnInit() {
    this.questions = this.dataService.getQuestion();
  }

  addQuestion(question:Question){
    this.dataService.addQuestion(question);
  }

}
