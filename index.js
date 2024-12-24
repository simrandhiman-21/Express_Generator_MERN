const express=require('express');
const app=express();
const connectDB=require('./db'); //import db file

const users=require('./routes/users');

const PORT=3000;

app.use(express.json()); //body parser
connectDB(); //coneect to db 

app.use('/api',users); //load api 
//postman api/users 

app.get('/',(req,res)=>{
    console.log("I'M Home Page");
    res.send("Welcome to Home Page");
})
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
