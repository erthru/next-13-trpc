import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginClient from "./client";

const Login = async () => {
  const session = await getServerSession();

  if (session?.user) {
    redirect("/");
  }

  return <LoginClient />;
};
export default Login;
