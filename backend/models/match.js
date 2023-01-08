const mongoose = require('mongoose'); // import module mongoose

const matchShema = mongoose.Schema({
    teamOne:String,
    teamTwo:String,
    scoreOne:Number,
    scoreTwo:Number,

})
const match = mongoose.model("Match",matchShema)
module.exports = match
