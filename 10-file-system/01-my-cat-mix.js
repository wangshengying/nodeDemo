const fs=require('fs');
    file=process.argv[2] || _filename;

    const fid=fs.openSync(file,'r');

    console.log(fs.readFileSync(fid).toString('utf8'));
    
    fs.closeSync(fid);

