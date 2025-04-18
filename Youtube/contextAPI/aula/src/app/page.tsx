'use client';
import { useAuth } from "@/contexts/auth";
import { useForm } from "react-hook-form";

export default function Home() {
  const { user, login, logout } = useAuth();

  const { register, handleSubmit } = useForm<{ name: string; token: string }>();

  console.log(user);

  const handleLogin = ({ name}: { name: string }) => {
    const userForm = { 
      name, 
      token: 'token' };
    
    login(userForm);
  };
  
  return (
    <main>
      <h2>Context API</h2>

      <p>{user?.name}</p>

      <form onSubmit={handleSubmit(handleLogin)}>
        <input type="text" placeholder="Informe seu nome" {...register('name')} />

        <button type="submit">Entrar</button>
      </form>

      <button className=" border rounded p-2 m-4" onClick={logout}>logout</button>
    </main>
  );
}
