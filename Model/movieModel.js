const mongoose=require ('mongoose');

const movieSchema=mongoose.Schema({
    
movieTitle:{type:String,required:true},
descreption:{type:String,required:true},
posterUrl:{type:String  ,default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkOeoTVZvCL7D5l7s1EvW5WN2_vM5O1vuVbQ&usqp=CAU"},
trailler:{type:String , required:true},
category:{type:String , required:true},
rate:{type:Number , required:true, default:0},
favorite:{type:Boolean  ,default:false},
})

module.exports= mongoose.model("Movie",movieSchema);