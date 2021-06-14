import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email, admin } = dados;
    req.userId = id;
    req.userEmail = email;
    req.admin = admin;

    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido!'],
    });
  }
};
