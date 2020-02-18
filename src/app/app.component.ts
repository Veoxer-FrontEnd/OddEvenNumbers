import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numbersArray: number[] = [];

  numberIncremented(event: {currentNbr: number}){
    this.numbersArray.push(event.currentNbr);
  }
}
