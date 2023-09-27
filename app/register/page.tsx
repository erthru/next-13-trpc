import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import RegisterClient from "./client";

const Register = async () => {
  const session = await getServerSession();

  if (session?.user) {
    redirect("/");
  }

  return <RegisterClient />;
};
export default Register;
