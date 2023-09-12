import TrpcProvider from "@/providers/trpc-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = (props: Props) => (
  <html lang="en">
    <body>
      <TrpcProvider>{props.children}</TrpcProvider>
    </body>
  </html>
);

export default RootLayout;
