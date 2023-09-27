declare type CardData = {
  cardId: string;
  pos: [number, number];
  title?: string;
  content?: string;
};

declare type CardDataList = CardData[];

declare interface CardPosition {
  [cardId: string]: [number, number];
}
