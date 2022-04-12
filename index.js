const express = require('express');
const app=express();
const os=require('os');
//const morgan=require('morgan');
//const logger=require('./logger');
//const authorize=require('./authorize');
const people=require('./routes/people');
const auth=require('./routes/auth');
//use static asset
app.use(express.static('./public'));
//parse form data
app.use(express.urlencoded({extended:true}));
//parse json
app.use(express.json());
//set base url
app.use('/login',auth);
app.use('/api/people',people);
//req=>middleware=>res
//app.use([logger,authorize])
/* const path=require('path');
const {readFileSync}=require('fs');
const http=require('http'); */

//const homepage=readFileSync('./index.html');
//app.get function tells the server what to do, get the index of route
//callback function consists request and respond respectively for http get method
//app.listen starts port and host, by default localhost connected to port 3000

//use custom middleware
/* app.use('/home',(req,res,next)=>{
	console.log("Custom middleware running at ",Date.now());
	next();
}); */
/* app.get('/',(req,res)=>{
	res.sendFile(path.resolve(__dirname))
}); */

/*  
app.get('/api/items',[logger,authorize],(req,res)=>{
	res.send('Items');
}); */ 

app.all('*',(req,res)=>{
	res.status(404).send('Error!');
});


//const user = os.userInfo();

/* const server=http.createServer((req,res)=>{
	if(req.url==='/'){
		res.writeHead(200,{'content-type':'text/html'});
		res.write(homepage);
		res.end('Welcome to our home page');
	}
	if(req.url==='/about')
		res.end('Here is our short history');
	if(res.statusCode===404){
		res.write('<h1>Error not found</h1><a href="/">Go Back</a>')
		res.end("Oops...")
	}
})

server.listen(5000); */

app.listen(3000,() => {
	//console.log(user);
	console.log(`System uptime is ${os.uptime()} seconds`);
	//console.log(path.sep);
	
}); 