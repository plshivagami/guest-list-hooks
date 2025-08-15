import { useGuests } from "./useGuests";

export default function GuestList({ onSelectGuest }) {
  const { guests, loading, error } = useGuests();

  if (loading) return <p>Loading guests...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="guest-list">
      {guests.map((guest) => (
        <div
          key={guest.id}
          className="guest-item"
          onClick={() => onSelectGuest(guest)}
        >
          <strong>{guest.name}</strong> - {guest.email}
        </div>
      ))}
    </div>
  );
}
