'use client';
import { useAuth } from "@/contexts/auth";
import { useForm } from "react-hook-form";

export default function Home() {
  const { user, login, logout } = useAuth();

  const { register, handleSubmit } = useForm<{ name: string; token: string }>();

  console.log(user);
  
  return (
    <main>
      <h2>Context API</h2>

      <p>{user?.name}</p>

      <form onSubmit={handleSubmit(login)}>
        <input type="text" placeholder="Informe seu nome" {...register('name')} />

        <button type="submit">Entrar</button>
      </form>

      <button className=" border rounded p-2 m-4" onClick={logout}>Click</button>
    </main>
  );
}
