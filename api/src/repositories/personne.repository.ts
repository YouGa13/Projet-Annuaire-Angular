import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AnnuaireDataSource} from '../datasources';
import {Personne, PersonneRelations} from '../models';

export class PersonneRepository extends DefaultCrudRepository<
  Personne,
  typeof Personne.prototype.id,
  PersonneRelations
> {
  constructor(
    @inject('datasources.annuaire') dataSource: AnnuaireDataSource,
  ) {
    super(Personne, dataSource);
  }
}
