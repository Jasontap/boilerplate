const db = require('./db')
const {STRING} = require('sequelize')

const Favorite = db.define('favorite',{
  name:{
    type:STRING
  }
})

module.exports = Favorite
