"use client";

import { client } from "@/utils/trpc/client";
import { FormEvent, useState } from "react";

const RegisterClient = () => {
  const registerMutation = client.register.useMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      alert("passwords do not match");
      return;
    }

    const user = await registerMutation.mutateAsync({
      username,
      password,
    });

    if (!user) {
      alert("registration failed, usename may be used");
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
        <input
          value={passwordConfirmation}
          type="password"
          placeholder="password confirmation"
          required
          onInput={(e) => setPasswordConfirmation(e.currentTarget.value)}
        />
        <button type="submit">register</button>
      </form>
    </>
  );
};

export default RegisterClient;
