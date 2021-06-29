const mongoose = require ('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    email:{
        type : String,
        required : true,
        trim : true
    },

    password:{
        type : String,
        required : true,
        trim : true
    },

    role:{
        type : String,
        enum : ["MANAGER", "WORKER"],
        required : true,
        trim : true
    },

    status:{
        type : String,
        enum : ["ACTIVE", "INACTIVE"],
        default : "ACTIVE",
        required : true,
        trim : true
    },
    
},{
    timestamps : true

});

UserSchema.pre('save', async function(){
    var user= this;
    if (user.password){
        user.password = await bcrypt.hash(user.password, 8)
    }
})

UserSchema.statics.findByCredential = async(email,password)=>{
    var user = await User.findOne({email:email});
    if(!user){
        throw new Error ('Unable to login')
    }
    var check= await bcrypt.compare(password, user.password);
    if(!check){
        throw new Error('Unable to login')
    }
    return user;
}

UserSchema.methods.generateAuthToken = function(){
    var user = this;
    var token = jwt.sign({_id : user._id}, 'thisisdashboard')
    return token;
}


const User = mongoose.model('User',UserSchema);

module.exports = User;