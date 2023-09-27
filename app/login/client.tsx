"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const LoginClient = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (res?.error) {
      alert("login failed");
      return;
    }

    location.href = "/";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          type="text"
          placeholder="username"
          required
          onInput={(e) => setUsername(e.currentTarget.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="password"
          required
          onInput={(e) => setPassword(e.currentTarget.value)}
        />
        <button type="submit">login</button>
      </form>
    </>
  );
};

export default LoginClient;
