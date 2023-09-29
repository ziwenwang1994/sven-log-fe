"use client";
import Navigation from "@/components/Navigation";
import Card from "@/components/Card";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCardPosition } from "@/store/cardSlice";

export default function Home() {
  const cardList = useAppSelector((state) => state.cardReducer.cards);
  const dispatch = useAppDispatch();
  const [target, setTarget] = useState("");
  const [Cards, setCards] = useState(<div></div>);
  const [currentCard, setCurrentCard] = useState<CardData>();
  const mouseUp = (e: React.MouseEvent) => {
    setTarget("");
  };
  const mouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (target && currentCard) {
        dispatch(
          setCardPosition({
            cardId: target,
            pos: [
              currentCard.pos[0] + e.movementX,
              currentCard.pos[1] + e.movementY,
            ],
          })
        );
      }
    },
    [currentCard, dispatch, target]
  );

  useEffect(() => {
    if (cardList) setCurrentCard(cardList.find((el) => el.cardId === target));
  }, [cardList, target]);

  useEffect(() => {
    setCards(
      <div>
        {cardList.map((card) => {
          return (
            <Card key={card.cardId} cardData={card} setTarget={setTarget} />
          );
        })}
      </div>
    );
  }, [cardList, cardList.length]);

  return (
    <>
      <Navigation />
      <main
        className="flex h-full flex-col items-center justify-between bg-stone-100 relative"
        onMouseMove={mouseMove}
        onMouseUp={mouseUp}
        onMouseLeave={mouseUp}
      >
        {Cards}
      </main>
    </>
  );
}
