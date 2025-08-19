"use client";
import { useAuth } from "@/components/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { REGISTER_PAGE, LOGIN_PAGE } from "@/app/constants/literals";

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
      setError(REGISTER_PAGE.USER_EXISTS);
    }
  };

  return (
    <div className="card p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">{REGISTER_PAGE.REGISTER}</h1>
      {error && <div className="text-red-400 mb-2">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder={REGISTER_PAGE.NAME_PLACEHOLDER}
          className="w-full p-2 rounded bg-slate-900 border border-slate-700"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          {REGISTER_PAGE.CREATE_ACCOUNT}
        </button>
        &nbsp;&nbsp;
        <Link href="/login" className="w-full p-2 mt-4 rounded">
          {REGISTER_PAGE.LOGIN}
        </Link>
      </form>
    </div>
  );
}