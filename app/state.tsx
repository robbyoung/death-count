export interface Game {
    id: string;
    name: string;
    options: string;
}

export interface DeathOptions {
    name: string;
    options: string[];
}

export interface Playthrough {
    id: string;
    name: string;
    description: string;
    gameId: string;
}

export interface Death {
    id: string;
    playthroughId: string;
}

export interface State {
    games: Game[];
    playthroughs: Playthrough[];
    deaths: Death[];
    currentPlaythrough: string;
    currentGame: string;
}