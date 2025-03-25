'use client';
import { AuthContext } from "@/contexts/auth";
import React, { useContext } from 'react';

export default function Home() {
  const { user, login, logout } = useContext(AuthContext);
  console.log(user);
  return (
    <main>
      <h2>Context API</h2>

      <p>{user?.name}</p>

      <button className=" border rounded p-2 m-4" onClick={logout}>Click</button>
    </main>
  );
}
