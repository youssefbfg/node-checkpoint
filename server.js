var http = require('http');  
//create a server object:  
  
http.createServer(function (req, res) {  
    res.write('Hello node !!'); 
    res.end(); 
}).listen(3000); //the server object listens on port 8080   
  
// Console will print the message  
console.log('Server running at 3000'); 