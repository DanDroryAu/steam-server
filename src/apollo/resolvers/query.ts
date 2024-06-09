import { queryResolvers as playerServiceResolvers } from '@/api/player-service/resolver';
import { queryResolvers as steamUserResolvers } from "@/api/steam-user/resolver";

export const queryResolvers = {
    ...playerServiceResolvers,
    ...steamUserResolvers
}