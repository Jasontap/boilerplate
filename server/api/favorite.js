const favoriteRouter = require('express').Router()


favoriteRouter.get('/', (req,res,next)=>{
  res.send('my favorite Router')
})



module.exports = favoriteRouter