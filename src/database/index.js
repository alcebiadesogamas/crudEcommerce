import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Calcado from '../models/Calcado';
import Usuario from '../models/Usuario';

const models = [Usuario, Calcado];

const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
