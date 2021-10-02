const express = require('express');
const app = express();

const mongoose = require('./database/mongoose')

app.listen(3000, function(){
    console.log("server started on port 3000");
});

/* lambda function
app.listen(3000, () => {
    console.log("server started on port 3000");
});
 */