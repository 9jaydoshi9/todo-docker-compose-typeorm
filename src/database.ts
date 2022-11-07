import { DataSource } from 'typeorm';
import dbConfig from '../ormconfig';


export const db = new DataSource(dbConfig);

export function dbConnection() {
    db.initialize()
        .then(() => {
            console.log("DB connection success !")
        })
        .catch(err => {
            console.log("DB connection error !", err);
            console.log('RETRYING !',new Date().getTime());
            setTimeout(dbConnection, 3000);
        })
}