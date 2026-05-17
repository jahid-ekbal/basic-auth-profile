import UpdateAvatarForm from "@/components/Form/UpdateAvatarForm";
import UpdateNameForm from "@/components/Form/UpdateNameForm";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { auth } from "@/lib/auth";
import { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Profile | Auth App",
  description: "Profile page of auth profile project",
};

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/auth");
  }

  return (
    <section className="grid place-items-center gap-8 pt-22">
      <Card className="w-xs">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Change Avatar</CardTitle>
        </CardHeader>

        <UpdateAvatarForm prevAvatar={session.user.image} />
      </Card>

      <Card className="w-xs">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Change Name</CardTitle>
        </CardHeader>

        <UpdateNameForm />
      </Card>
    </section>
  );
};

export default page;
