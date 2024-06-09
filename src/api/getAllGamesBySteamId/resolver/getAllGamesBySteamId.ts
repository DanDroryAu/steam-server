import { type GetAllGamesBySteamIdInput } from "@/api/getAllGamesBySteamId/schema/input/getAllGamesBySteamId.type";


export const getAllGamesBySteamId = async (parent, args: GetAllGamesBySteamIdInput, context, info) => {
    console.log('getAllGamesBySteamId', parent, args, context, info);

    const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${args.steamId}&format=json`;

    const res = await fetch(url);
    const data = await res.json();
    console.log('data', data);

    return {
        gameCount: data.response.game_count,
        games: data.response.games
    }
}
