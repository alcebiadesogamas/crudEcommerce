module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pedidos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      idUsuario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuarios',
          key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: false,
        field: 'id_usuario',
      },
      valorTotal: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'valor_total',
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
    await queryInterface.dropTable('pedidos');
  },
};
