import Calcado from '../models/Calcado';

class CalcadoController {
  //  Create
  async store(req, res) {
    try {
      const novoCalcado = await Calcado.create(req.body);
      const { marca, valor, descricao } = novoCalcado;
      return res.json({ marca, valor, descricao });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  //  Read
  async index(req, res) {
    try {
      const calcados = await Calcado.findAll({ attributes: ['marca', 'valor', 'descricao'] });
      return res.json(calcados);
    } catch (e) {
      return res.json(null);
    }
  }

  //  Show
  async show(req, res) {
    try {
      const calcado = await Calcado.findByPk(req.params.id);
      const { marca, valor, descricao } = calcado;
      return res.json({ marca, valor, descricao });
    } catch (e) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }

      const calcado = await Calcado.findByPk(req.params.id);

      if (!calcado) {
        return res.status(400).json({
          errors: ['Calcado não existe!'],
        });
      }

      const novosDados = await calcado.update(req.body);

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
          errors: ['ID não enviado.'],
        });
      }

      const calcado = await Calcado.findByPk(req.params.id); // busca o calcado na base de dados

      if (!calcado) {
        return res.status(400).json({
          errors: ['Calcado não existe!'],
        });
      }

      await calcado.destroy(); // deleta o calcado

      return res.json(calcado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new CalcadoController();
