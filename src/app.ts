import express from 'express';
// import * as https from 'https';
import appConfig from './setup';
import AuthRouter from './auth/auth.router';

// setup env variables etc.
appConfig();

// create Express API
const app = express();

// Auth routes
app.get('/auth*', AuthRouter);

// Start the express app
if (process.env.PROJECT_ENV === 'dev') {
  app.listen(process.env.PORT, () => { console.log('App listening on', process.env.PORT); });
} else {
  // TODO
  // https.createServer({}, app);
}
