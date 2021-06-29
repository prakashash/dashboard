const service = require ('./user.service');
const User = require ('../../models/user');


const getUser = (req,res) =>{
    console.log("===coming===")
    service.getUser(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        console.log("===errorrr===", err)
        res.status(500).send(err);
s
    })
}

const saveUser = (req,res) =>{
    service.saveUser(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const changeStatus = (req,res) =>{
    service.changeStatus(req).then((result)=>{
        res.status(200).send("Updated changes");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const loginUser = async (req,res) =>{
    try{
        var user = await User.findByCredential(req.body.email, req.body.password);
        var token = await user.generateAuthToken();
        res.cookie("jwt", token, {
            expires : new Date (Date.now()+ 5000000),
            httpOnly: true
        });
        
        delete user['password'];

        console.log("====", user)
        res.status(200).send({
            user : user,
            token: token
        })
    }catch(e){
        console.log(e)
        res.status(400).send("Unable to login");
    }
}



module.exports = {
    getUser,
    saveUser,
    loginUser,
    changeStatus
}