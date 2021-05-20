import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
// import homeRoutes from './src/routes/homeRouter';
import usuarioRoutes from './src/routes/usuarioRouter';
import calcadoRoutes from './src/routes/calcadoRouter';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    // this.app.use('/', homeRoutes);
    this.app.use('/usuarios/', usuarioRoutes);
    this.app.use('/calcados/', calcadoRoutes);
  }
}

export default new App().app;
