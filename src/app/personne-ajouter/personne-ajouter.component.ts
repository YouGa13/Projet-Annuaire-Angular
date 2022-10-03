import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Personne } from '../models/personne';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-personne-ajouter',
  templateUrl: './personne-ajouter.component.html',
  styleUrls: ['./personne-ajouter.component.css']
})
export class PersonneAjouterComponent implements OnInit {

  dernierNom: string = '';
  constructor(private ps: PersonneService) { }

  ngOnInit(): void {
  }


  traiterFormulaire(form: NgForm) {
    console.log(form);
    this.ps.ajouterPersonne(this.formValueVersPersonne(form.value)).subscribe(
      (p:Personne) => {console.log(p) 
      console.log(form.value)}
    );
    this.dernierNom = form.value.nom;
    form.reset();
  }

  
  formValueVersPersonne(formValue: any): Personne {
    return {
      nom: formValue.nom,
      prenom: formValue.prenom,
      telephone: formValue.telephone,
      adresse: formValue.adresse
    } as Personne;
  }
}
