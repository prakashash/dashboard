const service = require ('./task.service');
const Task = require ('../../models/task');


const getTask = (req,res) =>{
    service.getTask(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
s
    })
}

const saveTask = (req,res) =>{

    if (req.body.user.role != "MANAGER"){
        res.status(403).send("Not allowed to access page");
        return;
    }

    req.body.owner = req.body.user._id;

    service.saveTask(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}


const updateTask = (req,res) =>{

    if (req.body.user.role != "MANAGER"){
        res.status(403).send("Not allowed to access page");
        return;
    }
    
    service.updateTask(req).then((result)=>{
        res.status(200).send("Updated");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

module.exports = {
    getTask,
    saveTask,
    updateTask
    
}