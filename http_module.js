const http= require('http');
const server= http.createServer((req, res)=>{
    if( req.url=== '/'){
        res.end('This is home page!');
    } else if( req.url=='/about'){
        res.end('This is all about history!');
    } else{
        res.end(`
        <h1>OOps!</h1>
        <a href='/'>Back to Home Page</a>
        `);
    }
});
server.listen(5050);