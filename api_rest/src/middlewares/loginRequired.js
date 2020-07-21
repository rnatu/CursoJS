import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    //   payloads
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await User.findOne({
      where: {
        id, // o mesmo que id: id (foi declarado somente id para evitar redundancia)
        email, // o mesmo que email: email (foi declarado somente email para evitar redundancia)
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido, faça login novamente'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (error) {
    return res.satus(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
