export const steamApiService = {
    API_KEY: '',
    init({ apiKey }: { apiKey: string }) {
        this.API_KEY = apiKey;
    },
    baseUrl: 'https://api.steampowered.com/',
    async GetOwnedGames({ steamId, options }: { steamId: string, options?: unknown }){
        try {
            const res = await fetch(`${this.baseUrl}IPlayerService/GetOwnedGames/v0001/?key=${this.API_KEY}&steamid=${steamId}&format=json&include_appinfo=1&include_played_free_games=1`);
            const { response} = await res.json() as { response: { game_count: number, games: any[] } }
            return response;
        } catch (error) {
            // TODO: nicer error handling.
            console.error(error);
        }
    },
    async GetPlayerSummaries({ steamIds }: { steamIds: string[] }) {
        try {
            const res = await fetch(`${this.baseUrl}ISteamUser/GetPlayerSummaries/v0002/?key=${this.API_KEY}&steamids=${steamIds.join(',')}`);
            const { response} = await res.json() as { response: { players: any[] } }
            return response;
        } catch (error) {
            // TODO: nicer error handling.
            console.error(error);
        }
    },
}