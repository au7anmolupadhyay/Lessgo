const mongoose = require('mongoose');

const connectToDB =()=>{
    mongoose.connect(process.env.DB_CONNECT)
    .then(console.log("Connected To DB"))
    .catch((e) => console.log("Error: ", e))
}

module.exports = connectToDB;