const dotenv = require('dotenv')
dotenv.config({
     path: './.env'
});
const app = require('./app')
const port = process.env.PORT;
const database = require('./src/database/database')

database.connect()
app.listen(port, () => console.log(`Server is running on port ${port}`))