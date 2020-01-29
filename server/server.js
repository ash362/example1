const express = require('express');
const app = express();
const path = require('path'); 
 app.use(express.static('public')); 
 app.use(express.static(path.join(__dirname, '/../public'))); 
 app.use(express.static(path.join(__dirname, '/../src')) );


app.listen(3000, function (){
	console.log('app started on port 3000');
});