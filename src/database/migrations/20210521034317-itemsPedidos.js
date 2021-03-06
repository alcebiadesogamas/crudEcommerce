module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('items_pedidos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      idPedido: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'pedidos',
          key: 'id',
        },
        field: 'id_pedido',
      },
      idCalcado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'calcados',
          key: 'id',
        },
        field: 'id_calcado',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('items_pedidos');
  },
};
