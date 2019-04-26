const args = require('minimist')(process.argv.slice(2));
const extend = require('extend');

const environment = args.env || "test";

const common_conf = {
    name: "game",
    version: "0.0.1",
    environment: environment,
    max_player: 100,
    data_paths: {
        items: __dirname + "\\GameData\\" + "\\Items\\",
        maps: __dirname + "\\GameData\\" + "\\Maps\\",
    },
    start_zone: "rm_map_home"
}

const conf = {
    
    production: {
        ip: args.ip || "127.0.0.1",
        port: args.port || 8081,
        database: "mongodb://127.0.0.1/game_prod"
    },
    
    test: {
        ip: args.ip || "0.0.0.0",
        port: args.port || 8082,
        database: "mongodb://127.0.0.1/game_test"
    }
};

extend(false, conf.production, common_conf);
extend(false, conf.test, common_conf);

module.exports = config = conf[environment];