import Usuario from '../models/Usuario';

class UsuarioController {
  //  Create
  async store(req, res) {
    try {
      const novoUsuario = await Usuario.create(req.body);
      return res.json(novoUsuario);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  //  Read
  async index(req, res) {
    try {
      const loggedUser = await Usuario.findByPk(req.userId);
      if (loggedUser.isAdmin()) {
        const usuarios = await Usuario.findAll({ attributes: ['id', 'name', 'email'] });
        return res.json(usuarios);
      }
      return res.status(400).json({
        errors: ['Permissão negada: must be admin'],
      });
    } catch (e) {
      return res.json(null);
    }
  }

  //  Show
  async show(req, res) {
    try {
      const loggedUser = await Usuario.findByPk(req.userId);
      if (loggedUser.isAdmin()) {
        const usuario = await Usuario.findByPk(req.params.id);
        const { id, name, email } = usuario;
        return res.json({ id, name, email });
      }
      return res.status(400).json({
        errors: ['Permissão negada: must be admin'],
      });
    } catch (e) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.userId);

      if (!usuario) {
        return res.status(400).json({
          errors: ['Usuario não existe!'],
        });
      }

      const novosDados = await usuario.update(req.body);

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
      if (!req.userId) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }

      const usuario = await Usuario.findByPk(req.userId); // busca o usuario na base de dados

      if (!usuario) {
        return res.status(400).json({
          errors: ['Usuario não existe!'],
        });
      }

      await usuario.destroy();

      return res.json(usuario);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UsuarioController();
