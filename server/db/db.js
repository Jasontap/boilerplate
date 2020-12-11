const sequelize = require('sequelize')

const DB_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/temp'

const db = new sequelize(DB_URL,{logging:false})

module.exports = db