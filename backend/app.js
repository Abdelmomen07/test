//import module express
const express = require("express")

const bodyParser = require('body-parser') //import module body-parser

//ceation application express
const app = express()
const mongoose = require('mongoose'); // import module mongoose
mongoose.connect('mongodb://localhost:27017/sportdb');
console.log("connect sportDB");

const Match = require('./models/match'); // import moduel Match

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Security configuration
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
next();
});


fake_data=[
    {id:1 , teamOne:"ESS" , teamTwo:"aaa" , scoreOne:"2", scoreTwo:"0"}
]

// trait logique get all matches
// /==>http:localhost:3000/
app.get('/matches',(req,res)=>{

    Match.find().then((data)=>{
        if(data){
            res.status(200).json({
                matches:data
            })
        }
    })
    
})
//trait logique add Match
app.post('/matches',(req,res)=>{
    const match = new Match({
        teamOne:req.body.teamOne,
        teamTwo:req.body.teamTwo,
        scoreOne:req.body.scoreOne,
        scoreTwo:req.body.scoreTwo,
    })
    match.save()
    res.status(200).json({
        message:"1"
    })
    
    
})
// trait logique delete match
app.delete('/matches/:id',(req,res)=>{

    Match.deleteOne({_id:req.params.id}).then(()=>{
            res.status(200).json({
                message:"deleted"
            })
        })
    
})





module.exports = app



