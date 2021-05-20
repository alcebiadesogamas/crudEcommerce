import Sequelize, { Model } from 'sequelize';

export default class Cliente extends Model {
  static init(sequelize) {
    super.init({
      idUsuario: Sequelize.INTEGER,
    },
    {
      sequelize,
    });
    return this;
  }
}
