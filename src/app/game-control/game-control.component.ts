import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output('counterStartd') counterStartd = new EventEmitter<{ currentNbr: number }>();
  counter: number = 0;
  ref;

  constructor() { }

  ngOnInit(): void {
  }

  startCounter(){
    this.ref = setInterval(() => this.counterStartd.emit({currentNbr : this.counter++}), 2000);
  }

  incrementNbr(){
    this.counterStartd.emit({currentNbr : this.counter});
  }

  stopCounter(){
    clearInterval(this.ref);
  }

}
