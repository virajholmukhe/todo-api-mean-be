const express = require('express');
const app = express();

app.listen(3000, function(){
    console.log("server started on port 3000");
});

/* lambda function
app.listen(3000, () => {
    console.log("server started on port 3000");
});
 */

const mongoose = require('./database/mongoose')
const TaskList = require('./database/models/taskList')
const Task = require('./database/models/task')

//middleware of Json
app.use(express.json()); //3rd party bodyParser

/* 
CORS - Cross origin request security
3rd party library
app.use(cors());
*/
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Pass to next layer of middleware
    next();
});

//Routes or REST API Endpoints  or RESTfull webservices endpoints
/*  */

//get all tasklist
app.get('/task-list', (req, res, ) => {
    TaskList.find({})
        .then((list) => {
            res.status(200);
            res.send(list);
            
        })
        .catch((error) => {
            console.log(error)
        });
})

//create tasklist
app.post('/task-list', (req, res) => {
    let taskListObj = {'title': req.body.title}
    TaskList(taskListObj).save()
        .then((list) => {
            res.status(201);
            res.send(list);
            
        })
        .catch((error) => {
            console.log(error)
        });
})

//get one tasklist by id
app.get('/task-list/:tasklistId', (req, res) => {
    let tasklistId = req.params.tasklistId;
    TaskList.find({_id: tasklistId})
    .then((tasklist) => {
        res.status(200);
        res.send(tasklist);
        
    })
    .catch((error) => {
        console.log(error)
    });
})

//update tasklist by id
// PUT - for complete update, PATCH - for partial update
app.put('/task-list/:tasklistId', (req, res) => {
    TaskList.findOneAndUpdate({_id: req.params.tasklistId}, {$set: req.body}, {new: true})
    .then((list) => {
        res.status(200);
        res.send(list);
        
    })
    .catch((error) => {
        console.log(error)
    });
})

app.patch('/task-list/:tasklistId', (req, res) => {
    TaskList.findOneAndUpdate({_id: req.params.tasklistId}, {$set: req.body},{new: true})
    .then((tasklist) => {
        res.status(200);
        res.send(tasklist);
        
    })
    .catch((error) => {
        console.log(error)
    });
})

//delete tasklist by id
app.delete('/task-list/:tasklistId', (req, res) => {
    TaskList.findOneAndDelete({_id: req.params.tasklistId},{new: true})
    .then((tasklist) => {
        res.status(200);
        res.send(tasklist);
        
    })
    .catch((error) => {
        console.log(error)
    });
})

