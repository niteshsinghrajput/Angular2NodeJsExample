/*************************************************************************/
/******************** @author : Nitesh Singh Rajput **********************/
/*************************************************************************/
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

var app = express();
const port = 3000;

//create a mongo db connection 
mongoose.connect('mongodb://<username>:<password>@<mongo db host>/<database name>');

//on successful connection
mongoose.connection.on('connected',()=>{
	console.log('Connection has been established successfully');
});

//in case of error, display the error 
mongoose.connection.on('error',(err)=>{
	console.log('Error while connecting to the database : '+err);
});

const route = require("./routes/route");

// to add middleware
app.use(cors());

// to add body parser
app.use(bodyParser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

// to redirect a particular request which contains api in request end point to route.js file
app.use('/api',route);

app.get('/', (req,res)=>{

	res.send('Welcome');
});

app.listen(port,()=>{

	console.log("Server is listening on "+port);
});


