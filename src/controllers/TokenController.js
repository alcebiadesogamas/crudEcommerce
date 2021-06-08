import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais invalidas'],
      });
    }

    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(401).json({
        errors: ['Usario não existe'],
      });
    }

    if (!(await usuario.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha incorreta'],
      });
    }
    const { id } = usuario;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

export default new TokenController();
