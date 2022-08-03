const mongoose = require('mongoose');
const databaseURL = process.env.DATABASE_URL;

exports.connect = () => {
     mongoose.connect(databaseURL, {
          useNewUrlParser: true,
     }).then(() => console.log('Database connect successfully.')).catch((err) => {
          console.log('Database connection fail');
          console.log(err)
     })
};