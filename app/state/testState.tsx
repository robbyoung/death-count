import uuid from 'uuid';
import { State, Game, Playthrough, Death, OptionSet } from './state';

export function createTestState(
    gameCount: number,
    playthroughCount: number,
    deathCount: number,
    currentGame: number,
    currentPlaythrough: number,
    currentOptions: number = undefined,
): State {
    const games: Game[] = [];
    for (let i = 0; i < gameCount; i++) {
        games.push({
            id: `g${i}`,
            name: `Game ${i}`,
            selected: currentGame === i,
            complete: true,
        });
    }

    const playthroughs: Playthrough[] = [];
    for (let i = 0; i < playthroughCount; i++) {
        playthroughs.push({
            id: `p${i}`,
            name: `Playthrough ${i}`,
            gameId: `g${i % gameCount}`,
            selected: currentPlaythrough === i,
            complete: true,
        });
    }

    const deaths: Death[] = [];
    for (let i = 0; i < deathCount; i++) {
        deaths.push({
            id: `d${i}`,
            playthroughId: `p${i % playthroughCount}`,
            complete: true,
            details: {
                'Option Set 0': `Option ${(i % 3) + 1}`,
                'Option Set 1': `Option ${(i % 3) + 1}`,
                'Option Set 2': `Option ${(i % 3) + 1}`,
            },
        });
    }

    const numOptionSets = gameCount * 3;
    const optionSets: OptionSet[] = [];
    for (let i = 0; i < numOptionSets; i++) {
        optionSets.push({
            title: `Option Set ${Math.floor(i / gameCount)}`,
            options: ['Option 1', 'Option 2', 'Option 3'],
            gameId: `g${i % gameCount}`,
            id: `o${i}`,
            selected: currentOptions === i,
        });
    }

    return {
        games,
        playthroughs,
        deaths,
        optionSets,
    };
}

export function createTestGame(
    complete: boolean,
    id: string = uuid.v4(),
): Game {
    return {
        complete,
        id,
        name: 'Test Game',
        selected: false,
    };
}

export function createTestPlaythrough(
    complete: boolean,
    id: string = uuid.v4(),
): Playthrough {
    return {
        id,
        complete,
        gameId: 'Test Game',
        name: 'Test Name',
        selected: false,
    };
}

export function createTestDeath(
    complete: boolean,
    id: string = uuid.v4(),
    numDetails = 0,
): Death {
    const details = {};
    for (let i = 0; i < numDetails; i++) {
        details[`k${i}`] = `v${i}`;
    }

    return {
        complete,
        details,
        id,
        playthroughId: '123',
    };
}

export function createTestOptionSet(
    numOptions: number,
    id: string = uuid.v4(),
): OptionSet {
    const options = [];
    for (let i = 0; i < numOptions; i++) {
        options.push(`Option ${i}`);
    }

    return {
        title: 'Test Options',
        id,
        gameId: 'g0',
        options,
        selected: false,
    };
}
