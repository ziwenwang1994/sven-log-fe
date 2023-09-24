"use client";
import { cardList } from "../../mock/cardList";
import Card from "./Card";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [cardData, setCardData] = useState<CardDataList>(cardList);
  const [target, setTarget] = useState("");
  const [Cards, setCards] = useState(<div></div>);
  const mouseUp = (e: React.MouseEvent) => {
    setTarget("");
  };
  const mouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (target) {
        cardData[target].pos[0] += e.movementX;
        cardData[target].pos[1] += e.movementY;
        setCardData({ ...cardData });
      }
    },
    [target, cardData]
  );

  useEffect(() => {
    setCards(
      <div>
        {Object.keys(cardData).map((cardId) => {
          const card = cardList[cardId];
          return <Card key={cardId} cardData={card} setTarget={setTarget} />;
        })}
      </div>
    );
  }, [cardData]);

  return (
    <main
      className="flex h-full flex-col items-center justify-between bg-stone-100 relative"
      onMouseMove={mouseMove}
      onMouseUp={mouseUp}
      onMouseLeave={mouseUp}
    >
      {Cards}
    </main>
  );
}
