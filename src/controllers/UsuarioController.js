import Usuario from '../models/Usuario';

class UsuarioController {
  async store(req, res) {
    const novoUsuario = await Usuario.create({
      name: 'junior',
      email: 'junior@gmail.com',
      password: '123456',
    });
    res.json(novoUsuario);
  }
}

export default new UsuarioController();
