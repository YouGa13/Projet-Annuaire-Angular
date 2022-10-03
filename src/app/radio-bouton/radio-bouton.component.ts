import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-radio-bouton',
  templateUrl: './radio-bouton.component.html',
  styleUrls: ['./radio-bouton.component.css']
})
export class RadioBoutonComponent implements OnInit {
backgroundColor !: string;
@Output() backgroundChoiseEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
change (indexColor: number){
  switch (indexColor){
    case 1 : this.backgroundChoiseEvent.emit('blue');
    break;
    case 2 : this.backgroundChoiseEvent.emit('green');
    break;
case 3 : this.backgroundChoiseEvent.emit('yellow');
break;
case 4 :
default : this.backgroundChoiseEvent.emit('red')
  }
}
}
