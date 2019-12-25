export interface Game {
    id: string;
    name: string;
    options: DeathOptions[];
    selected: boolean;
}

export interface DeathOptions {
    title: string;
    options: string[];
}

export interface Playthrough {
    id: string;
    name: string;
    gameId: string;
    selected: boolean;
}

export interface Death {
    id: string;
    playthroughId: string;
    complete: boolean;
    details: { [id: string] : string };
}

export interface State {
    games: Game[];
    playthroughs: Playthrough[];
    deaths: Death[];
}