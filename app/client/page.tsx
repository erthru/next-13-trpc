"use client";

import { client } from "@/utils/trpc/client";

const Client = () => {
  const { data } = client.greetings.useQuery({ name: "erthru client" });

  return (
    <>
      <p>{data}</p>
    </>
  );
};

export default Client;
