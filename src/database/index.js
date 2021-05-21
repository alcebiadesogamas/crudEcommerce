import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Calcado from '../models/Calcado';
import Usuario from '../models/Usuario';
import Pedido from '../models/Pedido';

const models = [Usuario, Calcado, Pedido];

const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
