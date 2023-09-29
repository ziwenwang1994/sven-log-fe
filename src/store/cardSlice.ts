import { cardList } from "@/mock/cardList";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import store from "store2";

type CardState = {
  cards: CardDataList;
};

type CardPositionState = {
  cardId: string;
  pos: [number, number];
}

type CardContentState = {
  cardId: string;
  title?: string;
  content?: string;
}

type CardPositionAction = {
  payload: CardPositionState;
}

type CardContentAction = {
  payload: CardContentState;
}

const initialState = {
  cards: store("cardList") || [...cardList],
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
      store("cardList", state.cards);
    },
    setCardPosition: (state, action: CardPositionAction) => {
      const card = state.cards.find(el => el.cardId === action.payload.cardId);
      if (card) {
        card.pos = action.payload.pos;
      }
    },
    setCardContent: (state, action: CardContentAction) => {
      const card = state.cards.find(el => el.cardId === action.payload.cardId);
      if (card) {
        card.title = action.payload.title || "";
        card.content = action.payload.content || "";
      }
      store("cardList", state.cards);
    },
  },
});

export const { reset, addCard, setCards, setCardPosition, setCardContent } = card.actions;
export default card.reducer;
