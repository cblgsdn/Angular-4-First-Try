import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }

  openStep = 1;

  ngOnInit() {

  }

  goToNextStep(stepNumber) {
    this.openStep = stepNumber;
  }

  shouldOpen(stepNumber) {
    return (this.openStep == stepNumber);
  }

}
