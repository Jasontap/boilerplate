const db = require('./db')
const {STRING} = require('sequelize')

const User = db.define('user',{
  name:{
    type:STRING
  }
})

module.exports = User
