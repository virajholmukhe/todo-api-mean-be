const mongoose = require('mongoose');

mongoose.Promise = global.Promise

mongoose.connect('mongodb://127.0.0.1:27017/tododb')
    .then( () => {
        console.log("DB Connected successfully")
    })
    .catch( (error) => {
        console.log(error)
    });

module.exports = mongoose;