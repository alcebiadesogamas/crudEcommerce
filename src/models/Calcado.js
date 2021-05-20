import Sequelize, { Model } from 'sequelize';

export default class Calcado extends Model {
  static init(sequelize) {
    super.init(
      {
        marca: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Marca não pode ser nulo!',
            },
          },
        },
        valor: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Valor não pode ser nulo!',
            },
          },
        },
        descricao: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
      },
      {
        sequelize,
      },
    );

    return this;
  }
}
