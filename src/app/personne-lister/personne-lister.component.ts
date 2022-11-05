import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-personne-lister',
  templateUrl: './personne-lister.component.html',
  styleUrls: ['./personne-lister.component.css']
})
export class PersonneListerComponent implements OnInit {

personneSelected !:Personne;
  personnesAAfficher: Personne[] = [];

  constructor(private ps: PersonneService) {
    this.majPersonnesAAfficher()
    // this.personnesAAfficher= ps.getPersonnes()
  }

  ngOnInit(): void {
  }



  //fonction qui met à jour les personnes à afficher 
  majPersonnesAAfficher() {
    this.ps.getPersonnes().subscribe(
       (personnesPubliees: Personne[]) => {
        this.personnesAAfficher = personnesPubliees
        // console.log(personnesPubliees);
       }
    )
  }

  traiterSuppressionPersonne(personneASupprimer: Personne) {
    this.ps.supprimer(personneASupprimer).subscribe(
      () => {
        this.majPersonnesAAfficher()

      }
    )

  }
}
