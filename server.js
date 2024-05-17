const express = require('express')
const mongoose = require('mongoose')
const app = express()
const route = require('./routes/userroutes')

mongoose.connect('mongodb://localhost:27017/Login-Signup')
.then(() => console.log('MongoDB connected'))
.catch((error) => {console.log("MongoDB Connection Error", error)})

app.use(express.json())

app.use('/user', route)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}....`)
})