declare interface CardData {
    cardId: string;
    pos: [number, number],
    title?: string;
    content?: string;
}

declare interface CardDataList {
    [cardId: string]: CardData;
}

declare interface CardPosition {
    [cardId: string]: [number, number]
}