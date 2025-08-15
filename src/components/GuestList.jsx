export default function GuestList({ guests, selectedId, onSelect }) {
  return (
    <>
      <h1 className="title">Guest List</h1>

      <table className="guest-table">
        <thead>
          <tr>
            <th style={{ width: "33%" }}>Name</th>
            <th style={{ width: "50%" }}>Email</th>
            <th style={{ width: "45%" }}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest, i) => (
            <tr
              key={guest.id}
              className={`${i % 2 === 0 ? "even" : "odd"} ${
                selectedId === guest.id ? "selected" : ""
              }`}
              onClick={() => onSelect(guest.id)}
            >
              <td>{guest.name}</td>
              <td>{guest.email}</td>
              <td>{guest.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="hint">Select a guest to see more details.</p>
    </>
  );
}
