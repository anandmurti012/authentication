const  colors = require('colors');

//These all are testing for color packages
// console.log('hello'.rainbow);   
// console.log('hello'.trap);
// console.log('hello'.yellow);
// console.log('hello'.blue);
// console.log('hello'.underline.red);
// console.log('hello'.inverse);
// console.log('====='); 
// console.log('hello'.trap); 

const express = require('express');
const {errorHandler} = require('./middleware/errorMiddleware')
require('dotenv').config();
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./Routes/goalRoutes'))
app.use('/api/users', require('./Routes/userRoutes'))

app.use(errorHandler)
 
app.listen(port, () => {
    console.log(`Server has started on port ${port}`)
});