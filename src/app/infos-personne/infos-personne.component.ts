import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-infos-personne',
  templateUrl: './infos-personne.component.html',
  styleUrls: ['./infos-personne.component.css']
})
export class InfosPersonneComponent implements OnInit {
@Input() pers! : Personne;
  constructor() { }
  
  ngOnInit(): void {
  }

}
