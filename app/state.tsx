export interface Death {
    location: string;
    enemy: string;
    characterId: string;
}

export interface Character {
    id: string;
    name: string;
    description: string;
    game: string;
}


export interface State {
    deaths: Death[];
    characters: Character[];
}