import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../models/personne';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-personne-detail',
  templateUrl: './personne-detail.component.html',
  styleUrls: ['./personne-detail.component.css']
})
export class PersonneDetailComponent implements OnInit {
@Input()
pers !: Personne;
@Input()
numero !: number;
@Output()
suppressionPersonneEvent = new EventEmitter<Personne>()
  constructor(private ps: PersonneService) { }
  
  ngOnInit(): void {
  }
  traiterButonSupprimer(form: Personne) {
   // this.ps.supprimer(form);
   this.suppressionPersonneEvent.emit(form);
  }
}
