module.exports = {
  development: {
    client: process.env.DB_CLIENT || 'pg',
    connection: {
      database: process.env.DB_DATABASE || 'postgres',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'password'
    }
  },

  staging: {
    client: process.env.DB_CLIENT || 'pg',
    connection: {
      database: process.env.DB_DATABASE || 'postgres',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: process.env.DB_ || 'knex_migrations'
    }
  },

  production: {
    client: process.env.DB_CLIENT || 'pg',
    connection: {
      database: process.env.DB_DATABASE || 'postgres',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
