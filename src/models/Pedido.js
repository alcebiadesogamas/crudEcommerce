import Sequelize, { Model } from 'sequelize';

export default class Pedido extends Model {
  static init(sequelize) {
    super.init(
      {
        idUsuario: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'idUsuario (cliente) no pedio não pode ser nulo',
            },
          },
        },
        valorTotal: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate:
          {
            notEmpty: {
              msg: 'valor não pode ser nulo',
            },
          },
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }
}
