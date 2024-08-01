import mongoose, { mongo } from 'mongoose'
import bcrypt from 'bcrypt'
const userSchema=new mongoose.Schema({
username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true
},
email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    
},
fullname:{
    type:String,
    required:true,
    lowercase:true,
    trim:true,
   
},
avatar:{
    type:String,//cloud url
    required:true
},
coverdImage:{
    type:String,//cloud url
    
},
watchhistory:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Video"
},
password:{
    type:String,
    required:[true,"password is required"],
},
refereshToken:{
    type:String,
}




},{timestamps:true})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
        
    
    this.password=bcrypt.hash(this.password,10)
    next();
})
//password sahe he ki nahe chcek karne ke liye ye code

userSchema.methods.isPasswordCorrect=async function(password){
   return await bcrypt.compare(password,this.password)
}
//token generate

userSchema.methods.generateAcessToken=function(){
  return  Jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username,
        fullname:this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:process.env.ACCESS-TOKEN_EXPIRY
    }
)
}
userSchema.methods.generateRefrenceToken=function(){
    return  Jwt.sign({
        _id:this._id,
       
    },
    process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
)
}
export const User= mongoose.model("User",userSchema)