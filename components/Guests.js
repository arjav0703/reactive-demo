"use client";
import React, { useEffect, useState } from "react";

export default function Guests() {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function fetchGuests() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error("Failed to fetch guests");
        }
        const data = await res.json();
        setGuests(data);
      } catch (err) {
        setErrorMsg(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGuests();
  }, []);

  if (loading) return <div>Loading guests...</div>;
  if (errorMsg) return <div>Error: {errorMsg}</div>;

  return (
    <div className="p-10 rounded-4xl w-6xl text-white border border-white backdrop-blur-2xl backdrop-brightness-75">
      <h1 className="text-4xl font-bold mb-8">
        Guests staying at the Continental:
      </h1>
      <ul>
        {guests.map((guest) => (
          <li key={guest.id}>
            <strong>{guest.name}</strong> ({guest.username}) – {guest.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
