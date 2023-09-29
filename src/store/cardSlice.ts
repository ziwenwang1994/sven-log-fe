import { cardList } from "@/mock/cardList";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CardState = {
  cards: CardDataList;
};

type CardPositionState = {
  cardId: string;
  pos: [number, number];
}

const initialState = {
  cards: [...cardList],
} as CardState;

type CardPositionAction = {
  payload: CardPositionState;
}

export const card = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: (state) => {
      state.cards = [];
    },
    setCards: (state, { payload: CardDataList }) => {
      state.cards = CardDataList;
    },
    addCard: (state, { payload: CardData }) => {
      state.cards.push(CardData);
    },
    setCardPosition: (state, action: CardPositionAction) => {
      const card = state.cards.find(el => el.cardId === action.payload.cardId);
      if (card) {
        card.pos = action.payload.pos;
      }
    },
  },
});

export const { reset, addCard, setCards, setCardPosition } = card.actions;
export default card.reducer;
