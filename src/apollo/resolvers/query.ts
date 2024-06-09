import { queryResolvers as getGameTotalsResolver } from '@/api/getGameTotals/resolver';
import { queryResolvers as getAllGamesBySteamIdResolver } from '@/api/getAllGamesBySteamId/resolver';

export const queryResolvers = {
    ...getGameTotalsResolver,
    ...getAllGamesBySteamIdResolver,
}