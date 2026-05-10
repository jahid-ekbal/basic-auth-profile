import UserProfileCard from "@/components/UserProfileCard";
import prisma from "@/lib/database/dbClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Auth App",
  description: "Home page of auth profile project",
};

const page = async () => {
  const allUsers = await prisma.user.findMany({
    select: {
      id: true,
      image: true,
      name: true,
      email: true,
    },
  });

  return (
    <section className="grid grid-cols-3 place-items-center gap-4 pt-22 pb-3">
      {allUsers.map((item) => (
        <UserProfileCard
          key={item.id}
          info={item}
        />
      ))}
    </section>
  );
};

export default page;
