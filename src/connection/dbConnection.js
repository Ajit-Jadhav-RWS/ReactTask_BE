const mongoose = require('mongoose');
const url = 'mongodb+srv://ajit06jadhav:7qwertyuiop8@cluster0.kmqrgwy.mongodb.net/user?retryWrites=true&w=majority'

// connecting to database
function connectToMongoDb() {
    try {
        mongoose.connect(url, { useNewUrlParser: true });
        const connection = mongoose.connection;
        connection.on('open', () => console.log("Connected to data base......"));
    } catch (error)
    {
        console.log(error.message);
    }
}
module.exports = {
    connectToMongoDb
}