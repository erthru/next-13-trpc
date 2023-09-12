import { serverClient } from "@/utils/trpc/server-client";

const Index = async () => {
  const data = await serverClient.greetings({ name: "erthru" });

  return (
    <>
      <p>{data}</p>
    </>
  );
};
export default Index;
