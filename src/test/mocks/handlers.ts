import { http, HttpResponse } from 'msw'

export const handlers = [
    http.get('https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/', ({request}) => {
        const url = new URL(request.url)

        const steamId = url.searchParams.get('steamid');
        const key = url.searchParams.get('key');

        if (key !== 'test-key') {
            return new HttpResponse(null, { status: 400 });
        }

        if (steamId === '') {
            return HttpResponse.json({
                response: {
                    game_count: 0,
                    games: []
                }
            });
        }

        return HttpResponse.json({
            response: {
                game_count: 2,
                games: [
                    {
                        appid: 111,
                        name: 'Half-life 3 (confirmed)',
                        playtime_forever: 50,
                        playtime_2weeks: 50,
                        img_icon_url: 'test-icon',
                        img_logo_url: 'test-logo',
                    },
                    {
                        appid: 222,
                        name: 'Apex Legends',
                        playtime_forever: 100,
                        playtime_2weeks: 0,
                        img_icon_url: 'test-icon-two',
                        img_logo_url: 'test-logo-two',
                    }
                ]
            }
        })
    }),
    http.get('https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/', () => {
        console.log('hitting mocked endpoint');
        return HttpResponse.json({
            response: {
                players: [
                    {
                        steamid: 'test-id',
                        personaname: 'test-name',
                        profileurl: 'test-url',
                        avatar: 'test-avatar',
                        avatarmedium: 'test-avatar-medium',
                        avatarfull: 'test-avatar-full',
                        personastate: 1,
                        communityvisibilitystate: 3,
                        profilestate: 1,
                        lastlogoff: 1234567890,
                        commentpermission: 1,
                        realname: 'test-real-name',
                        primaryclanid: 'test-primary-clan-id',
                        timecreated: 1234567890,
                        personastateflags: 1,
                        loccountrycode: 'US',
                        locstatecode: 'CA',
                        loccityid: 123456,
                    }
                ]
            }
        })
    }),
]