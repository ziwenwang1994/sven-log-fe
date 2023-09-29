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
    <nav className="h-[120px] w-full bg-black overflow-hidden flex relative z-10">
      <div
        className="text-white py-[4px] px-[6px] m-[8px] bg-green-700 h-[32px] rounded cursor-pointer"
        onClick={addNote}
      >
        Add note
      </div>
    </nav>
  );
}
