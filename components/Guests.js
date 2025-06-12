"use client"
import React, { useState, useEffect } from "react";

export default function Guests() {
  const [users, setUsers] = useState([]);       // holds the fetched user data
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch users when component mounts
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []); // empty deps array => run once on mount

  if (isLoading) {
    return <div>Loading users…</div>;
  }

  if (error) {
    return <div>Error fetching users: {error}</div>;
  }

  return (
    <div className="p-10 border-1 border-white backdrop-blur-2xl backdrop-brightness-75 text-white rounded-4xl">
        <h1 className="text-4xl font-extrabold mb-8 ">
          Guests staying at the Continentals:
        </h1>
      <ul className="w-7xl ">
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.username}) – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
