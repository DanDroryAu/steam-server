import { type GetAllGamesBySteamIdInput } from "@/api/player-service/schema/input/getAllGamesBySteamId.type";
import { steamApiService } from "@/steam/steamApi";

export const getSteamUserDetails = async (_, { args }: { args: GetAllGamesBySteamIdInput }) => {
    const { steamId } = args;
    const response = await steamApiService.GetPlayerSummaries({ steamIds: [steamId] });

    const player = response.players[0];

    return {
        personaName: player.personaname,
        avatarUrl: player.avatarfull,
        profileUrl: player.profileurl,
        personaState: player.personastate,
        realName: player.realname,
        primaryClanId: player.primaryclanid,
        timeCreated: player.timecreated,
        locCountryCode: player.loccountrycode,
    }
}
