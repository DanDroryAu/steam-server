import { queryResolvers as getAllGamesBySteamIdResolver } from '@/api/getAllGamesBySteamId/resolver';

export const queryResolvers = {
    ...getAllGamesBySteamIdResolver,
}