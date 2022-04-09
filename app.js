/**
 * Blackjack game main file app.js
 * @author Oscar Escamilla
 * @date 08.04.2022
 */
require('dotenv').config();
const Server = require('./models/server');

// Starting server
const server = new Server();
server.listen();