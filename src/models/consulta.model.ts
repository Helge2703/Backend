import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Consulta extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  modalidadContrato: string;

  @property({
    type: 'string',
    required: true,
  })
  consulta: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaInicio: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaFinal: string;

  @property({
    type: 'string',
    required: true,
  })
  departamentoContrato: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaConsulta: string;

  @property({
    type: 'number',
    required: true,
  })
  idUsuario: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Consulta>) {
    super(data);
  }
}

export interface ConsultaRelations {
  // describe navigational properties here
}

export type ConsultaWithRelations = Consulta & ConsultaRelations;
