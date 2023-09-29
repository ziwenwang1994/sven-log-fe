"use client";

import { setCardContent } from "@/store/cardSlice";
import { useAppDispatch } from "@/store/hooks";
import { useCallback, useEffect, useState } from "react";

interface CardProps {
  cardData: CardData;
  setTarget: (cardId: string) => any;
}

export default function Card({ cardData, setTarget }: CardProps) {
  const dispath = useAppDispatch();
  const [title, setTitle] = useState(cardData.title || "");
  const [content, setContent] = useState(cardData.content || "");

  useEffect(() => {
    dispath(
      setCardContent({
        cardId: cardData.cardId,
        content,
        title,
      })
    );
  }, [title, content, dispath, cardData.cardId]);
  return (
    <div
      className="min-h-[320px] w-[320px] bg-amber-100 p-[16px] drop-shadow-lg absolute text-black"
      style={{
        top: cardData.pos[1],
        left: cardData.pos[0],
      }}
      onMouseDown={(e: React.MouseEvent) => {
        setTarget(cardData.cardId);
      }}
    >
      <h3
        className="bg-transparent w-full resize-none break-words font-black whitespace-pre-line p-[4px] outline-light text-[18px]"
        contentEditable
        suppressContentEditableWarning
        onBlur={(e: React.FormEvent) => {
          const value = (e.target as HTMLElement).outerText;
          setTitle(value);
        }}
      >
        {title}
      </h3>
      <div
        className="bg-transparent w-full resize-none min-h-[150px] break-words whitespace-pre-line p-[4px] outline-light  text-[14px]"
        contentEditable
        suppressContentEditableWarning
        onBlur={(e: React.FormEvent) => {
          const value = (e.target as HTMLElement).outerText;
          setContent(value);
        }}
      >
        {content}
      </div>
    </div>
  );
}
