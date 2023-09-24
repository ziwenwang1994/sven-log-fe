"use client";

import { useCallback, useEffect, useState } from "react";

interface CardProps {
  left: number;
  top: number;
  cardId: string;
  setTarget: (cardId: string)=>any;
}

export default function Card({
  top, left, cardId, setTarget
}: CardProps) {

  return (
    <div
      className="min-h-[200px] w-[200px] bg-amber-100 p-[16px] drop-shadow-lg absolute text-black"
      style={{
        top, left
      }}
      onMouseDown={(e: React.MouseEvent)=>{
        setTarget(cardId);
      }}
    >{cardId}</div>
  );
}
