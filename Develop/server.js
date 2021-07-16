const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const routes = require('./routes')
const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/test'

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/fitness-tracker',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//  /
app.use(routes)


//  GET /workouts
app.get('/workouts', (req, res)=> {})



app.listen(PORT, () => {
    console.log(`First app listening on ${PORT}`)
})