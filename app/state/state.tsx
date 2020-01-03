export interface Game {
    id: string;
    name: string;
    selected: boolean;
    complete: boolean;
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

export interface OptionSet {
    id: string;
    gameId: string;
    title: string;
    options: string[];
    selected: boolean;
}

export interface State {
    games: Game[];
    playthroughs: Playthrough[];
    deaths: Death[];
    optionSets: OptionSet[];
}