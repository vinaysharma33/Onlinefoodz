// This is backend of our website

const path=require('path');
const pug=require('pug');
const express=require('express');
const app=express();
var mongoose=require('mongoose');
const port=80;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static',express.static('static'));

app.set('view engine','pug');

app.set('views',path.join(__dirname,'views'));

app.get('/food',(req,res)=>{
    res.status(200).render('food');
});

mongoose.connect('mongodb://localhost/Booking',{useNewUrlParser:true,useUnifiedTopology:true});

var ReservationSchema=new mongoose.Schema({
    name: String,
    number: String,
    date:String,
    time:String
});

var Reservation=mongoose.model('Customer',ReservationSchema);

app.post('/registration',(req,res)=>{
    var myData=new Reservation(req.body);
    myData.save().then(()=>{
        res.send("This is saved");
    }).catch(()=>{
        res.status(400).send("Information not saved");
    });
});

app.listen(port,()=>{
    console.log(`Suceesfully listen on ${port}`);
});