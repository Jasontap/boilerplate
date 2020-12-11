const express = require('express')
const path = require('path')
const {db} = require('./db')
const chalk = require('chalk');
const chalkRainbow = require('chalk-rainbow')

const PORT = process.env.PORT || 3000

const app = express()

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use('/api',require('./api/index'))

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/test',(req,res,next)=>{
  res.send('testing my server')
})

const initializeApp = async() => {
  try{
   await app.listen(PORT,()=>{
    console.log(chalk.bgMagentaBright('SERVER RUNNING'))
  })
  if(process.env.DBSYNC){
    await db.sync()
    console.log(chalkRainbow('D A T A B A S E  I N I T'))
  }
} catch(e){
  console.log(chalk.redBright('☠️ ITS A TRAP ☠️'))
}
}

initializeApp()