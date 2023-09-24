"use client";
import Card from './Card'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const [position, setPosition] = useState<{[keyu:string]: [number, number]}>({ "card_1":[0,0], "card_2":[300,300] });
  const [target, setTarget] = useState("");
  const mouseUp = (e: React.MouseEvent) => {
    setTarget("");
  };
  const mouseMove = useCallback((e: React.MouseEvent) => {
    if (target) {
      position[target][0] += e.movementX;
      position[target][1] += e.movementY;
      setPosition({...position});
    }
  }, [target, position]);

  return (
    <main className="flex h-full flex-col items-center justify-between bg-stone-100 relative" onMouseMove={mouseMove} onMouseUp={mouseUp}>
      <Card left={position["card_1"][0]} top={position["card_1"][1]} cardId={"card_1"} setTarget={setTarget} />
      <Card left={position["card_2"][0]} top={position["card_2"][1]} cardId={"card_2"} setTarget={setTarget} />
    </main>
  )
}
