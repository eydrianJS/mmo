require(__dirname + '/Resources/config.js');

const fs = require('fs');
const net = require('net');

const initFiles = fs.readdirSync(__dirname + "/Initializers");
initFiles.forEach((initFiles)=>{
    console.log("Load init" + initFiles);
    require(__dirname + "/Initializers/" + initFiles);
})

const modelFiles = fs.readdirSync(__dirname + "/Models");
modelFiles.forEach((modelFile)=>{
    console.log("Load Model" + modelFile);
    require(__dirname + "/Models/" + modelFile);
})

let maps = {}
const mapsFiles = fs.readdirSync(config.data_paths.maps);
mapsFiles.forEach((mapsFile)=>{
    console.log("Load Maps" + mapsFile);
    const map = require(config.data_paths.maps + mapsFile);
    maps[map.room] = map
})

net.createServer(socket=> {

    console.log("socket connected");
    
    socket.on('error', err => {
        console.log("socket error" + err.toString());
    });
    socket.on('end', () => {
        console.log("socket closed");        
    });
    socket.on('data', data => {
        console.log("socket data " + data.toString());
    });

}).listen(config.port);

console.log("initialize complited server runninf" + config.port + " for " + config.environment)