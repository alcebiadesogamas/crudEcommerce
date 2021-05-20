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
      const usuarios = await Usuario.findAll();
      return res.json(usuarios);
    } catch (e) {
      return res.json(null);
    }
  }
}

export default new UsuarioController();
