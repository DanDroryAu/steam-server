import server from './apollo/server';
import { steamApiService } from "@/steam/steamApi";

steamApiService.init({ apiKey: process.env.STEAM_API_KEY || '' });

server.start();