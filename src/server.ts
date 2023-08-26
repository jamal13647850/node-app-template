require('app-module-path').addPath(__dirname)
require('dotenv').config()
const App = require('./app');
const Bot = require('./bot');

new App();
new Bot();

