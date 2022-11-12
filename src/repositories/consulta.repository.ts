import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BdCargaAgilDataSource} from '../datasources';
import {Consulta, ConsultaRelations} from '../models';

export class ConsultaRepository extends DefaultCrudRepository<
  Consulta,
  typeof Consulta.prototype.id,
  ConsultaRelations
> {
  constructor(
    @inject('datasources.BDCargaAgil') dataSource: BdCargaAgilDataSource,
  ) {
    super(Consulta, dataSource);
  }
}
