import { addCard } from "@/store/cardSlice";
import { useAppDispatch } from "@/store/hooks";

export default function Navigation() {
  const dispatch = useAppDispatch();
  const addNote = () => {
    const date = new Date();
    const note: CardData = {
      cardId: "note_" + date.getTime(),
      title: date.toISOString(),
      pos: [500 * Math.random(), 500 * Math.random()],
    };
    dispatch(addCard(note));
  };
  return (
    <nav className="h-[120px] w-full bg-black overflow-hidden flex">
      <div
        className="text-white p-[4px] m-[8px] bg-green-700 h-[32px]"
        onClick={addNote}
      >
        Add note
      </div>
    </nav>
  );
}
