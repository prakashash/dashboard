const User = require('../../models/user');

const getUser = (req)=>{
    try{
        return User.find(req.query)
    }catch(err){
        console.log("===get error===", err)
        throw Error(err)
    }
};

const saveUser = (req)=>{
    try{
        var user = new User(req.body)
        return user.save()
    }catch(err){
        throw new Error(err)
    }
};

const changeStatus = (req)=>{
    try{
        return User.findByIdAndUpdate(req.params.id, req.body);
    }catch(err){
        throw new Error(err)
    }
};

module.exports = {
    getUser,
    saveUser,
    changeStatus
}