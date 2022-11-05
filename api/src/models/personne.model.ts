import {Entity, model, property} from '@loopback/repository';

@model()
export class Personne extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  nom?: string;

  @property({
    type: 'string',
  })
  prenom?: string;

  @property({
    type: 'string',
  })
  telephone?: string;

  @property({
    type: 'string',
  })
  adresse?: string;


  constructor(data?: Partial<Personne>) {
    super(data);
  }
}

export interface PersonneRelations {
  // describe navigational properties here
}

export type PersonneWithRelations = Personne & PersonneRelations;
