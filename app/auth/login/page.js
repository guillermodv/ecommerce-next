"use client";
import { useState } from "react";
import { useAuth } from "@/components/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      router.push("/");
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="card p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Ingresar</h1>
      {error && <div className="text-red-400 dark:text-red-600 mb-2">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
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
          Entrar
        </button>
        <button className="w-full p-2 rounded bg-slate-800 dark:bg-slate-200 border border-slate-700 dark:border-slate-300 hover:bg-slate-700 dark:hover:bg-slate-300 text-white dark:text-black">
        </button>
      </form>
    </div>
  );
}