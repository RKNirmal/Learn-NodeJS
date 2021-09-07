var fs = require('fs');

var Client = require('ssh2-sftp-client');
var sftp = new Client();

var data = fs.createReadStream("new.txt");
var remote = "new.txt";
var dst = fs.createWriteStream("retrieved.txt");

const netconfig = {
  host: '10.10.5.72',
  port: '22',
  username: 'tester',
  password: 'password'
};


sftp.connect(netconfig)
  .then(() => {
    return sftp.put(data, remote);
  
  })
  .then(() => {
    return sftp.get(remote, dst);
  })
  .then(() => {
    dst.end();
    return sftp.end(); 
  })
  .then(() => {
    fs.readFile("retrieved.txt", function (err,data){
        if (err) throw err;
        console.log(data.toString());
        fs.unlinkSync("retrieved.txt");
    });
  })
  .catch(err => {
    console.error(err.message);
  });


