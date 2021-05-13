module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('itemsPedidos', {
      idPedido: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'pedidos',
          key: 'id',
        },
      },
      idCalcado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'calcados',
          key: 'id',
        },
      },
      idCliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'pedidos',
          key: 'idCliente',
        },
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
    await queryInterface.dropTable('itemsPedidos');
  },
};
