require('dotenv').config({ path: './config.env' });

const mongoose = require('mongoose')
const express = require('express');
const app = express();

require('./db/conn.js')

app.use(express.json());
// const DB=process.env.DATABASE 

// const DB='mongodb+srv://rohankumarmenu:Rohan@1230@cluster0.znc0vmi.mongodb.net/mern'

// const DB='mongodb+srv://rohankumarmenu:Rohan@1230@cluster0.znc0vmi.mongodb.net/?retryWrites=true&w=majority'
app.use(require('./router/auth.js'));

const PORT=process.env.PORT;
// const DB = process.env.DATABASE

const middleware = (req, res, next) => {
    console.log("Hello my middleware")
    next()
}

// app.get('/', (req, res) => {
//     res.send('Hi from server');

// })

// app.get('/about', middleware, (req, res) => {
//     res.send('Hi from about server');
//     console.log("Hi from about")
// })

app.get('/signin', (req, res) => {
    res.send('Hi from the signin server');
})

app.get('/signup', (req, res) => {
    res.send('Hi from signup  server');
})

// app.get('/contact', (req, res) => {
//     // res.cookie("test",'rohan')
//     res.send('Hi from contact server');
    
// })

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT} `);
})

