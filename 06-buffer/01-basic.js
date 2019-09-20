
const log=console.log;
var buf1=new Buffer(256);
log('buf1:',buf1);
log('buf1.length:',buf1.length);
var buf2=buf1.slice(250,256);
log('buf2:',buf2);

for(var i=0;i<buf2.length;i++){
  buf2[i]=i;
}
log('buf2:',buf2);

buf2.fill(0,0,6);
log('buf2.fill:',buf2);

log('buf2.toJSON:',buf2.toJSON);
log('buf2.toJSON2:',JSON.stringify(buf2));

var arr=[1,2,3,4];
var buf3=new Buffer(arr);
log('buf3:',buf3);

var buf4=new Buffer('hello world');
log('buf4:',buf4);

var str2='你好 wangding';
var buf5=new Buffer(str2);
log('buf5.length:',buf5.length);
log('string.length',str2.length);
buf4.copy(buf3,0,0,buf3.length);
log('buf4:',buf4);
log('buf3',buf3);

