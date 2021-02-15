'use strict'
import knex from 'knex'
import jwt from 'jsonwebtoken'
import { Model } from 'objection'
import knexConfig from '../database/knexfile'

const knexConnection = knex(knexConfig.development)

Model.knex(knexConnection)

class User extends Model {
  static get tableName() {
    return 'usuarios'
  }

  static async findByUsername(username) {
    const result = await this.query().findOne('username', username)
    return result
  }

  static async findById(id) {
    const result = await this.query().findById(id)
    return result
  }

  static async storeUser(data) {
    const user = await this.query().insert(data)
    return user
  }

  static async generateToken(id) {
    return jwt.sign(id, process.env.JWT_SECRET || 'secret')
  }
}

export default User
