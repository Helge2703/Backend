import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BdCargaAgilDataSource} from '../datasources';
import {Persona, PersonaRelations} from '../models';

export class PersonaRepository extends DefaultCrudRepository<
  Persona,
  typeof Persona.prototype.id,
  PersonaRelations
> {
  constructor(
    @inject('datasources.BDCargaAgil') dataSource: BdCargaAgilDataSource,
  ) {
    super(Persona, dataSource);
  }
}
