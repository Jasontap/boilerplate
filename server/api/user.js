const userRouter = require('express').Router()


userRouter.get('/', (req,res)=>{
  res.send('my user router')
})


module.exports = userRouter