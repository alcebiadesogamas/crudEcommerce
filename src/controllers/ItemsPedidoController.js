import ItemsPedido from '../models/ItemsPedido';

class ItemsPedidoController {
  // create
  async store(req, res) {
    try {
      const novoItemsPedido = await ItemsPedido.create(req.body);
      return res.json(novoItemsPedido);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Read or List
  async index(req, res) {
    try {
      const pedidos = await ItemsPedido.findAll();
      return res.json(pedidos);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show or List one
  async show(req, res) {
    try {
      const pedido = await ItemsPedido.findByPk(req.params.id);
      return res.json(pedido);
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }

      const pedido = await ItemsPedido.findByPk(req.params.id);

      if (!pedido) {
        return res.status(400).json({
          errors: ['Pedido não existe!'],
        });
      }

      const novosDados = await pedido.update(req.body);

      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const pedido = await ItemsPedido.findByPk(req.params.id);

      if (!pedido) {
        return res.status(400).json({
          errors: ['Pedido não exite!'],
        });
      }

      await pedido.destroy();
      return res.json(pedido);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new ItemsPedidoController();
