import * as bcrypt from 'bcrypt'
import User from '../models/User'

class UserController {
  async register(req, res) {
    const { username, senha } = req.body
    try {
      // Verificar se o usuário existe
      const userExits = await User.findByUsername(username)
      if (userExits) {
        return res.status(400).json({ error: 'Usuário já existe!' })
      }

      //Tratar senha
      const saltRounds = 3
      const salt = await bcrypt.genSalt(saltRounds)
      req.body.senha = await bcrypt.hash(senha, salt)
      req.body.salt = salt

      // Criar usuário
      const user = await User.storeUser(req.body)
      return res.json({ user })
    } catch (err) {
      console.log(err)
      return res.status(400).json({ error: 'Erro ao cadastrar usuário' })
    }
  }

  async login(req, res) {
    try {
      const { username, senha } = req.body

      //Procurar usuário
      const user = await User.findByUsername(username)
      if (!user) {
        return res.status(400).json({ error: 'Usuário não encontrado!' })
      }

      //Verificar senha
      const correctPass = await bcrypt.compare(senha, user.senha)
      if (!correctPass) {
        return res.status(400).json({ error: 'Senha errada!' })
      }

      //Gerar token do usuário
      return res.json({
        token: await User.generateToken(user.id),
        user
      })
    } catch (err) {
      return res.status(400).json({ error: 'Erro ao realizar login' })
    }
  }

  async show(req, res) {
    const user = await User.findById(req.userId)
    return res.json(user)
  }
}

export default new UserController()
