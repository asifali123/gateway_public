// import 'babel-polyfill';

// import the environment
import environment from './config/environment';
import dbHandler from './config/database';
import errorHandler from './config/error';
import routes from './routes';
import logger from 'morgan';
import helmet from 'helmet';

// Common imports
import bodyParser from 'body-parser';
import express from 'express';
const app = express();

if (process.env.NODE_ENV === 'dev')
    app.use(logger('dev'));

// Use helmet
app.use(helmet());

// parsing req/res body to json
app.use(bodyParser.json({ limit: '50mb' }));

// for parsing the url encoded data using qs library
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

dbHandler.openConnection().then((db_details) => {
    console.log(`Db is connected to ${db_details.db.s.databaseName}`);

    // Listen app on port
    app.listen(environment().PORT, () => {
        console.log(`server listening on ${environment().PORT} `);
    });

    // Load the routes
    routes(app);
}, (e) => {
    console.log('error in opening the connection', e);
});

errorHandler(app);

// kill process when Ctrl+C is hit
process.on('SIGINT', () => {
    console.log('bye bye !');
    dbHandler.closeConnection(() => {
        process.exit();
    });
});