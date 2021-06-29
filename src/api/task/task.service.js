const Task = require('../../models/task');

const getTask = (req)=>{
    try{
        return Task.find(req.query)
    }catch(err){
        throw Error(err)
    }
};

const saveTask = (req)=>{
    try{
        var task = new Task(req.body)
        return task.save()
    }catch(err){
        throw new Error(err)
    }
};

const updateTask = (req)=>{
    try{
        return Task.findByIdAndUpdate(req.params.id, req.body);
    }catch(err){
        throw new Error(err)
    }
};

module.exports = {
    getTask,
    saveTask,
    updateTask
}