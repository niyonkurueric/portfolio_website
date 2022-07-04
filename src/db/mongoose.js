import mongoose from "mongoose";
import 'dotenv/config'
mongoose.connect(process.env.DEVELOPMENT_DB,
    { 
        useNewUrlParser: true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log('connection successfully');
    }).catch((error)=>{
console.log('samething wrong',error);
    })