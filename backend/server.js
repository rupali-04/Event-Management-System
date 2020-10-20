const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
//const connectDB = require('./config/db')

dotenv.config({path: './config/config.env'})

//connectDB()
//const MongoClient = require('mongodb').MongoClient;
    const uri = process.env.MONGO_URI;
//const client = new MongoClient(uri, { useNewUrlParser: true });
mongoose.connect(uri, { useNewUrlParser: true });


const app = express()
const port = process.env.PORT
app.use(cors());
app.use(express.json())

/*
const url = 'mongodb://localhost/StudentDB'
mongoose.connect(url, {useNewUrlParser: true, useCreateIndex: true})
*/
const con = mongoose.connection

con.once('open', () =>{
    console.log("Database is Connected.......")
})

const studentRouter = require('./Routes/student')
const std = require('./Routes/std')
const eventtypes = require('./Routes/eventtype')

app.use('/student', studentRouter)
app.use('/std', std)
app.use('/events', eventtypes)

app.listen(port, () => {
    console.log(`server is running..... ${port}`)
})