#!/usr/bin/node

const fs=require('fs'),
      file=process.argv[2] || _filename;

fs.readFile(file,function(err,data){

  if(err){
    console.error(err.message);
  }else
    console.log(data.toString('utf8'));
  }
});


