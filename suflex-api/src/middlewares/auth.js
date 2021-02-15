import jwt from 'jsonwebtoken'
import { promisify } from 'util'

export default async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res
      .status(401)
      .send({ error: 'Você precisa está logado para acessar essa pagina.' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = await promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET || 'secret'
    )
    req.userId = decoded
    return next()
  } catch (err) {
    console.log(err)
  }
}
