"use client";

import { useCallback, useEffect, useState } from "react";

interface CardProps {
  cardData: CardData;
  setTarget: (cardId: string)=>any;
}

export default function Card({
  cardData, setTarget
}: CardProps) {

  return (
    <div
      className="min-h-[200px] w-[200px] bg-amber-100 p-[16px] drop-shadow-lg absolute text-black"
      style={{
        top: cardData.pos[1], left: cardData.pos[0]
      }}
      onMouseDown={(e: React.MouseEvent)=>{
        setTarget(cardData.cardId);
      }}
    >{cardData.content}</div>
  );
}
