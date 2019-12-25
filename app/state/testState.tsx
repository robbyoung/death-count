import uuid from 'uuid';
import { State, Game, Playthrough, Death, DeathOptions } from './state'

export function createTestState(gameCount: number, playthroughCount: number, deathCount: number, currentGame: number, currentPlaythrough: number): State {
    const options: DeathOptions[] = [];
    for (var i = 0; i < 3; i++) {
        options.push({
            title: `Option Set ${i}`,
            options: ['Option 1', 'Option 2', 'Option 3']
        });
    }

    const games: Game[] = [];
    for (var i = 0; i < gameCount; i++) {
        games.push({
            id: `g${i}`,
            name: `Game ${i}`,
            options,
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
            complete: true,
            details: {}
        });
    }

    return {
        games,
        playthroughs,
        deaths,
    }
}

export function createTestDeath(complete: boolean, id: string = uuid.v4(), numDetails: number = 0): Death {
    const details = {};
    for(var i = 0; i < numDetails; i++) {
        details[`k${i}`] = `v${i}`;
    }
    
    return {
        complete,
        details,
        id,
        playthroughId: '123',
    }
}