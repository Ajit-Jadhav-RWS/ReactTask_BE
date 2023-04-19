const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1/users';

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