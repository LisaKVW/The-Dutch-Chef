require('dotenv').config()
module.exports = {
  development: {
    database: 'chef_development',
    dialect: 'postgres'
  },
  test: {
    database: 'chef_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}


