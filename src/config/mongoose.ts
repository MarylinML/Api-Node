import mongoose from 'mongoose';


//const mongo_uri = 'mongodb://localhost/dbetitc';
const mongo_uri = 'mongodb+srv://marcela:Danna3007@cluster0.wtdzh.mongodb.net/etitcMarcela?retryWrites=true&w=majority'

        mongoose.connect(mongo_uri,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
            
        });