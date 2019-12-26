import uuid from 'uuid';
import { State, Game, Playthrough, Death, OptionSet } from './state'

export function createTestState(gameCount: number, playthroughCount: number, deathCount: number, currentGame: number, currentPlaythrough: number): State {
    const games: Game[] = [];
    for (var i = 0; i < gameCount; i++) {
        games.push({
            id: `g${i}`,
            name: `Game ${i}`,
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

    const numOptionSets = gameCount * 3;
    const optionSets: OptionSet[] = [];
    for (var i = 0; i < numOptionSets; i++) {
        optionSets.push({
            title: `Option Set ${i / gameCount}`,
            options: ['Option 1', 'Option 2', 'Option 3'],
            gameId: `g${i % gameCount}`,
            id: `o${i}`
        });
    }

    return {
        games,
        playthroughs,
        deaths,
        optionSets,
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

export function createTestOptionSet(numOptions: number, id: string = uuid.v4()): OptionSet {
    const options = [];
    for (var i = 0; i < numOptions; i++) {
        options.push(`Option ${i}`)
    }

    return {
        title: 'Test Options',
        id,
        gameId: 'g0',
        options,
    };
}