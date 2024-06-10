import { setupServer } from 'msw/node'
import { handlers } from './mocks/handlers'
import {steamApiService} from "@/steam/steamApi";

export const server = setupServer(...handlers)
steamApiService.API_KEY = 'test-key';

server.listen();