import {describe, test, expect} from "vitest";
import {getAllGamesBySteamId} from "@/api/player-service/resolver/getAllGamesBySteamId";
import {steamApiService} from "@/steam/steamApi";

describe("[resolver: getAllGamesBySteamId]", () => {
    test('return all games by steam id when given', async () => {
        const result = await getAllGamesBySteamId({}, { args: { steamId: 'test-id' } });
        expect(result).toEqual({
            gameCount: 2,
            totalPlaytime: 150,
            totalPlaytimeTwoWeeks: 50,
            games: [
            {
                appId: 222,
                name: 'Apex Legends',
                playtimeTotal: 100,
                playtimeLastTwoWeeks: 0,
                iconUrl: 'test-icon-two',
                logoUrl: 'test-logo-two'
            },
            {
                appId: 111,
                name: 'Half-life 3 (confirmed)',
                playtimeTotal: 50,
                playtimeLastTwoWeeks: 50,
                iconUrl: 'test-icon',
                logoUrl: 'test-logo'
            }]
        });
    });
    test('return no games when a wrong steam id is given', async () => {
        const result = await getAllGamesBySteamId({}, { args: { steamId: '' } });
        expect(result).toEqual({
            gameCount: 0,
            totalPlaytime: 0,
            totalPlaytimeTwoWeeks: 0,
            games: []
        });
    });
    test('should throw an error when the getAllGames steam service returns a status: 4xx ', async () => {
        try {
            steamApiService.API_KEY = 'wrong-key';
            await getAllGamesBySteamId({}, { args: { steamId: 'test-id' } });
        } catch (e) {
            expect(e.message).toEqual('error trying to get owned games');
            steamApiService.API_KEY = 'test-key';
        }
    });
});