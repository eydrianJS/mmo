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


console.log(maps);
// maps.rm_start_town.