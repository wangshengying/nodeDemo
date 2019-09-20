const fs=require('fs');

swith(process.argv.length){
  case 4:
    var src=process.argv[2],
        lnk=process.argv[3];

    fs.linkSync(src,lnk);
    break;

  case 5:
    var opt=process.argv[2],
        src=process.argv[3],
        lnk=process.argv[4];

    break;
  default:
    errMsg();
}
function errMsg(){
}
  src=process.argv[2];
  dst=process.argv[3];

