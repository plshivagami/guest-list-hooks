import { useState } from "react";
import GuestList from "./components/GuestList";
import { GUESTS } from "./data.js";
import GuestDetails from "./components/GuestDetails";
import { useGuests } from "./Hooks/useGuests";
import useGuestList from "./Hooks/useGuestList";

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const { guests, loading, error } = useGuests();
  if (loading) {
    return <p>loading...</p>;
  }
  console.log(guests);

  const selectedGuest = guests.find((guest) => guest.id === selectedId) || null;

  return (
    <>
      <div className="container">
        {selectedGuest ? (
          <GuestDetails
            guest={selectedGuest}
            onBack={() => setSelectedId(null)}
          />
        ) : (
          <GuestList
            guests={guests}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        )}
      </div>
    </>
  );
}
