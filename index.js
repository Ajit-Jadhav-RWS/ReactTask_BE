require("dotenv").config();
const mongoo = require("./src/config/dbConnection");
const app = require("./src/app");
const port = process.env.PORT;
mongoo.connectToMongoDb();
app.listen(port, console.log(`Server is ready to listen on port ${port}.........`));