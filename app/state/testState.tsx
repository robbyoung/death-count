import { State, Game, Playthrough, Death } from './state'

export function createTestState(gameCount: number, playthroughCount: number, deathCount: number, currentGame: number, currentPlaythrough: number): State {
    const games: Game[] = [];
    for (var i = 0; i < gameCount; i++) {
        games.push({
            id: `g${i}`,
            name: `Game ${i}`,
            options: [],
            selected: currentGame === i,
        });
    }

    const playthroughs: Playthrough[] = [];
    for (var i = 0; i < playthroughCount; i++) {
        playthroughs.push({
            id: `p${i}`,
            name: `Playthrough ${i}`,
            gameId: `g${i % gameCount}`,
            selected: currentPlaythrough === i,
        });
    }

    const deaths: Death[] = [];
    for (var i = 0; i < deathCount; i++) {
        deaths.push({
            id: `d${i}`,
            playthroughId: `p${i % playthroughCount}`,
        });
    }

    return {
        games,
        playthroughs,
        deaths,
    }
}