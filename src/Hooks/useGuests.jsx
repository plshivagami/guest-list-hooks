import { useState, useEffect } from "react";

export function useGuests() {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGuests() {
      try {
        const result = await fetch(
          "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2507-Shivagami/guests"
        );
        if (!result.ok) throw new Error("Failed to fetch guests");
        const data = await result.json();
        setGuests(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGuests();
  }, []);

  return { guests, loading, error };
}
export function useGuestDetails(guestId) {
  const [guest, setGuest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!guestId) return;

    async function fetchGuestDetails() {
      try {
        const result = await fetch(
          `https://fsa-crud-2aa9294fe819.herokuapp.com/api/guests/${guestId}`
        );
        if (!result.ok) throw new Error("Failed to fetch guest details");
        const data = await result.json();
        setGuest(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGuestDetails();
  }, [guestId]);

  return { guest, loading, error };
}
