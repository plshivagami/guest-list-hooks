export default function GuestDetails({ guest, onBack }) {
  if (!guest) return null;

  return (
    <div className="details">
      <h2>{guest.name}</h2>
      <p>
        <strong>Email:</strong> {guest.email}
      </p>
      <p>
        <strong>Phone:</strong> {guest.phone}
      </p>
      <p>
        <strong>Bio:</strong> {guest.bio}
      </p>
      <p>
        <strong>Job:</strong> {guest.job}
      </p>

      <button className="back-btn" onClick={onBack}>
        Back to List
      </button>
    </div>
  );
}
