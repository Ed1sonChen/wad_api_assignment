import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import bodyParser from 'body-parser';
import loglevel from 'loglevel';
import './db';
import {loadUsers, loadMovies, loadTvs} from './seedData'
import usersRouter from './api/users';
import GenresRouter from './api/genres';
import TVRouter from './api/tvs';

const helmet = require('helmet')
dotenv.config();

if (process.env.NODE_ENV === 'test') {
  loglevel.setLevel('warn')
} else {
  loglevel.setLevel('info')
}

if (process.env.SEED_DB === 'true' && process.env.NODE_ENV === 'development') {
  loadUsers();
  loadMovies();
  loadTvs();
}

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};

const app = express();

app.use(helmet())

const port = process.env.PORT ;

// if (process.env.NODE_ENV !== 'test') {  
//   app.use(logger('dev'));
// }
//configure body-parser
app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/api/movies', moviesRouter);

app.use('/api/users', usersRouter);

app.use('/api/genres', GenresRouter);

app.use('/api/tvs', function(req, res, next) {
  const isEnabled = req.optimizely.client.isFeatureEnabled(
    'tv', 
    'user1',
    {
      customerId: 123,
      isVip: true
    }
  )

  if (isEnabled) {
    next();
  }
}, TVRouter);

app.use(errHandler);

const server = app.listen(port, () => {
  loglevel.info(`Server running at ${port}`);
});

module.exports = server