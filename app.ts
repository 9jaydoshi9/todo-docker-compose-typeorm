import express from 'express';
import * as dotenv from 'dotenv'
import routes from './src/api/routes'
import {dbConnection} from './src/database';

dotenv.config()
const app = express();
const port = process.env.PORT || 5000;
dbConnection();

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

app.use("/api", routes)

app.listen(port, () => {
  console.log(`App is running on port ${port}.`);
});
