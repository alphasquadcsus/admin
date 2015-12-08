//Includes mongoDB config obj in ./env
module.exports = require('./env/' + process.env.NODE_ENV + '.js'); 