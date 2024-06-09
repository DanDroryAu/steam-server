"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./apollo/server");
var steamApi_1 = require("@/steam/steamApi");
steamApi_1.steamApiService.init({ apiKey: process.env.STEAM_API_KEY || '' });
server_1.default.start();
