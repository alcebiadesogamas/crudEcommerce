import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
// import homeRoutes from './src/routes/homeRouter';
import usuarioRoutes from './src/routes/usuarioRouter';
import calcadoRoutes from './src/routes/calcadoRouter';
import pedidoRoutes from './src/routes/pedidoRouter';

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
    this.app.use('/pedidos/', pedidoRoutes);
  }
}

export default new App().app;
