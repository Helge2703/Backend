import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'BDCargaAgil',
  connector: 'mongodb',
  url: 'mongodb+srv://AnibalDavid:NDBKeaUcv1LqMOe0@primero.1oxia6h.mongodb.net/DW54',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class BdCargaAgilDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'BDCargaAgil';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.BDCargaAgil', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
