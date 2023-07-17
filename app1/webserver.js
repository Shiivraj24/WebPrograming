//1.load http module
const http = require('http');
//2.create server instance
const server = http.createServer((request,response) => {
    //request : received by user
    //response : empty object need to be filled with required response
    console.log('received request')
    if(request.url=='/products'){
        if(request.method== 'GET'){
            console.log("select * from products .....")
        }else if(request.method == 'POST'){
            console.log("insert into products.....")
        }else if(request.method== 'DELETE'){
            console.log("delete from products.....")
        }
    } 
    if(request.url=='/Users'){
        if(request.method== 'GET'){
            console.log("select * from Users.....")
        }else if(request.method == 'POST'){
            console.log("insert into Users.....")
        }else if(request.method== 'DELETE'){
            console.log("delete from Users.....")
        }
    } 



    //send response
   response.end('<h1>Hello from server</h1>');
});

//3.start server on port 3000
server.listen(3002, '0.0.0.0',() => {
console.log('server started on port no 3002')
})