import Usuario from '../models/Usuario';

class UsuarioController {
  async index(req, res) {
    const novoUsuario = await Usuario.create({
      name: 'junior',
      email: 'junior@gmail.com',
      password: 'senha',
    });
    res.json(novoUsuario);
  }
}

export default new UsuarioController();
