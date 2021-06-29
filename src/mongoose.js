const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dashboard',
{
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true,
});

mongoose.connection.once('open',function(){
    console.log('MongoDB dashboard database connection established sucessfully')
})
