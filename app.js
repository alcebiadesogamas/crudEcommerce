import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
// import homeRoutes from './src/routes/homeRouter';
import usuarioRoutes from './src/routes/usuarioRouter';
import calcadoRoutes from './src/routes/calcadoRouter';
import pedidoRoutes from './src/routes/pedidoRouter';
import itemsPedidoRoutes from './src/routes/itemsPedidoRouter';

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
    this.app.use('/itemPedido', itemsPedidoRoutes);
  }
}

export default new App().app;
