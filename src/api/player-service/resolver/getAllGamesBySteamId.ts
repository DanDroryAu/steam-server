import { type GetAllGamesBySteamIdInput } from "@/api/player-service/schema/input/getAllGamesBySteamId.type";
import { steamApiService } from "@/steam/steamApi";

export const getAllGamesBySteamId = async (_, { args }: { args: GetAllGamesBySteamIdInput }) => {
    const { steamId } = args;
    const { games, game_count } = await steamApiService.GetOwnedGames({ steamId, options: {} });

    const { totalPlaytime, totalPlaytimeTwoWeeks, allGames } = games.reduce((acc, game) => ({
        totalPlaytime: acc.totalPlaytime + game.playtime_forever,
        totalPlaytimeTwoWeeks: acc.totalPlaytimeTwoWeeks + (game.playtime_2weeks ?? 0),
        allGames: acc.allGames.concat({
            appId: game.appid,
            name: game.name,
            playtimeTotal: game.playtime_forever,
            playtimeLastTwoWeeks: game.playtime_2weeks ?? 0,
            iconUrl: game.img_icon_url,
            logoUrl: game.img_logo_url,
        }),
    }), {
        totalPlaytime: 0,
        totalPlaytimeTwoWeeks: 0,
        allGames: [],
    });

    return {
        gameCount: game_count,
        totalPlaytime,
        totalPlaytimeTwoWeeks,
        games: allGames.sort((a, b) => b.playtimeTotal - a.playtimeTotal),
    }
}
