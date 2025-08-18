"use client";
import { useState } from "react";
import { useAuth } from "@/components/AuthContext";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register(name, email, password)) {
      router.push("/");
    } else {
      setError("Ya existe un usuario con ese email");
    }
  };

  return (
    <div className="card p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Registro</h1>
      {error && <div className="text-red-400 mb-2">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nombre"
          className="w-full p-2 rounded bg-slate-900 border border-slate-700"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded bg-slate-900 border border-slate-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-2 rounded bg-slate-900 border border-slate-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full p-2 rounded bg-slate-800 border border-slate-700 hover:bg-slate-700">
          Crear cuenta
        </button>
        <button className="w-full p-2 rounded bg-slate-800 dark:bg-slate-200 border border-slate-700 dark:border-slate-300 hover:bg-slate-700 dark:hover:bg-slate-300 text-white dark:text-black">
        </button>
      </form>
    </div>
  );
}