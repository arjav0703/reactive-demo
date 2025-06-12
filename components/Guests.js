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
    <div>
      <h2>Guest List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.username}) – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
