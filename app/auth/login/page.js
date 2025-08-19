"use client";
import { useState } from "react";
import { useAuth } from "@/components/AuthContext";
import { useRouter } from "next/navigation";
import { LOGIN_PAGE } from "@/app/constants/literals";

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
      setError(LOGIN_PAGE.INCORRECT_CREDENTIALS);
    }
  };

  return (
    <div className="card p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">{LOGIN_PAGE.LOGIN}</h1>
      {error && <div className="text-red-400 dark:text-red-600 mb-2">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder={LOGIN_PAGE.EMAIL_PLACEHOLDER}
          className="w-full p-2 rounded bg-slate-900 border border-slate-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder={LOGIN_PAGE.PASSWORD_PLACEHOLDER}
          className="w-full p-2 rounded bg-slate-900 border border-slate-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full p-2 rounded bg-slate-800 border border-slate-700 hover:bg-slate-700">
          {LOGIN_PAGE.SUBMIT_BUTTON}
        </button>
        <button className="w-full p-2 rounded bg-slate-800 dark:bg-slate-200 border border-slate-700 dark:border-slate-300 hover:bg-slate-700 dark:hover:bg-slate-300 text-white dark:text-black">
        </button>
      </form>
    </div>
  );
}