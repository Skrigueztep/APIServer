const mongoose = require('mongoose');
const MONGODB = 'mongodb://localhost:27017/admin';

mongoose.connect(MONGODB,{useNewUrlParser: true});

mongoose.connection.on('connected',()=>{
    console.log('Conected to MONGO!');
});

mongoose.connection.on('disconnected',()=>{
    console.log('Disconnected from db....');
});

mongoose.connection.on('error',(err)=>{
    console.log('An error was ocurred!!:  \n' + err);
});
