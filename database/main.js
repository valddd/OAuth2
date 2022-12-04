const mongoose = require('mongoose');
require('dotenv').config();


async function connect(){
    try{
        await mongoose.connect(process.env.mongodb, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log("Connected to the database!")
    }catch (e) {
        console.log(e)
    }
};

connect();