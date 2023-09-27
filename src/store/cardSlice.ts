import { cardList } from "@/mock/cardList";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CardState = {
  cards: CardDataList;
};

const initialState = {
  cards: cardList,
} as CardState;

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
  },
});

export const { reset, addCard, setCards } = card.actions;
export default card.reducer;
