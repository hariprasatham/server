const mongoose = require("mongoose")

const connectDb = async () =>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("connection established", connect.connection.name, connect.connection.host)
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDb