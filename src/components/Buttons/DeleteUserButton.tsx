"use client";

import { authClient } from "@/lib/auth-client";
import { LoaderIcon, Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";

const DeleteUserButton = () => {
  const [loading, setLoading] = useState(false);

  const { replace } = useRouter();

  const handelUserDelete = async () => {
    setLoading(true);

    try {
      await authClient.deleteUser();

      toast.success("Account successfuly deleted");

      replace("/");
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
    }

    await new Promise((r) => setTimeout(r, 1000));

    setLoading(false);
  };

  return (
    <Button
      onClick={handelUserDelete}
      disabled={loading}>
      {loading ?
        <>
          <LoaderIcon className="animate-spin" /> Deleting Account..
        </>
      : <>
          <Trash2Icon /> Delete Account
        </>
      }
    </Button>
  );
};

export default DeleteUserButton;
