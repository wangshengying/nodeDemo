
const http=require('http'),
      fs=require('fs');

http.createServer((req,res)=>{
 if(req.url==='/favicon.ico')return;
  var fileName=_dirname+req.url;
  console.log(fileName);
  fs.createReadStream(fileName).pipe(res);
}).listen(8080);

