import {DataSourceOptions} from 'typeorm';
import * as dotenv from 'dotenv'
dotenv.config()

export = {
  host: process.env.DB_HOST,
  type: 'mysql',
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [
    'src/**/**.entity{.ts,.js}',
  ],
  synchronize: true,
} as DataSourceOptions;