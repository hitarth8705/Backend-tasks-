var h=require("http");
var server=h.createServer(
function(req,res)
{
if(req.url=="/")
{
res.writeHead(200,{"content-type":"text/html"});
res.write("<h1> Home page </h1><div><ul><li><ahref='/'>Home</a></li><li><a href='/about'>About</a></li></ul>");
res.end();
}
else if(req.url=="/about")
{
res.writeHead(200,{"content-type":"text/html"});
res.write("<h1> About Page </h1>");
res.end();
}
else
{
res.writeHead(404,{"content-type":"text/plain"});
res.write("Page not found");
// Chapter 2
// 30
res.end("\nPlease check the url");
/* res.write("Bye");*/ //displays nothing if you add any content after res.end
// and throws an error
}
});
server.listen(5051);
