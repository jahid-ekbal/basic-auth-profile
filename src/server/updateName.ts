"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const updateName = async (newName: string) => {
  try {
    await auth.api.updateUser({
      body: {
        name: newName,
      },
      headers: await headers(),
    });

    return {
      isSuccess: true,
      message: "Update successful",
    };
  } catch (error) {
    console.log(error);

    return {
      isSuccess: false,
      message: "Update failed",
    };
  }
};

export default updateName;
