import Sequelize, { Model } from 'sequelize';

export default class ItemsPedido extends Model {
  static init(sequelize) {
    super.init({
      idPedido:
      {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate:
        {
          notEmpty:
          {
            msg: 'ID do pedido não pode ser nulo',
          },
        },
      },
      idCalcado:
      {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate:
        {
          notEmpty:
          {
            msg: 'ID do calcado não pode ser nulo',
          },
        },
      },
    },
    {
      sequelize,
    });
    return this;
  }
}
