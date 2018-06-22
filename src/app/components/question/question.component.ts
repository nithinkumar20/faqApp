import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/Question';
import { DataServeiceService } from '../../services/data-serveice.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input('question') question:Question;

  constructor( public dataService:DataServeiceService) { }

  ngOnInit() {
  }

  removeQuestion(question){
    this.dataService.removeQuestion(question);
  }

}
