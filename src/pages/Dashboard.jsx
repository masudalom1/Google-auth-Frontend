import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/get-user", {
          method: "GET",
          credentials: "include", //
        });
        const data = await res.json();

        if (data.success) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  if (!user) return <h2>User not found. Please login again.</h2>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.name}</p>
      <p>Email: {user.email}</p>
      {user.avatar && (
        <img
          src={user.avatar}
          alt="User avatar"
          width={80}
          height={80}
          style={{ border: "2px solid red" }}
        />
      )}
    </div>
  );
}
