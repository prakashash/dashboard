const mongoose = require ('mongoose');

const TaskSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true,
        trim : true
    },

    description:{
        type : String,
        required : true,
        trim : true
    },

    // date:{
    //     type : Date,
    //     required : false,
    // },

    rewards:{
        type : Number,
        required : true,
    },

    owner : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User"

    },

    status:{
        type : String,
        required : true,
        enum : ["APPROVED", "NEW", "COMPLETED", "REJECTED"],
        default : "NEW"
    },

    
},{
    timestamps : true

});


const Task = mongoose.model('Task',TaskSchema);

module.exports = Task;