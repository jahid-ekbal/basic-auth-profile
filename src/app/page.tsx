import UserDetailsCard from "@/components/UserDetailsCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Starter Fullstack",
  description: "Production grade Fullstack Next.js starter template",
};

const page = () => {
  return (
    <section className="grid h-dvh grid-cols-3 place-items-center gap-4">
      <UserDetailsCard />
      <UserDetailsCard />
      <UserDetailsCard />
    </section>
  );
};

export default page;
