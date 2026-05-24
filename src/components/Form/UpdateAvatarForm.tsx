"use client";

import uploadAvater from "@/server/uploadAvater";
import { ImageUpIcon, LoaderIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { useFilePicker } from "use-file-picker";
import { Button } from "../shadcnui/button";
import { CardContent, CardFooter } from "../shadcnui/card";

type UpdateAvatarFormProps = {
  prevAvatar: string | null | undefined;
};

const UpdateAvatarForm = ({ prevAvatar }: UpdateAvatarFormProps) => {
  const [isFile, setIsFile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { refresh } = useRouter();

  const { openFilePicker, filesContent, plainFiles } = useFilePicker({
    accept: "image/*",
    multiple: false,
    readAs: "DataURL",

    onFilesSuccessfullySelected: () => setIsFile(true),
    onClear: () => setIsFile(false),
  });

  const uploadHandeler = async () => {
    setIsLoading(true);

    const { isSuccess, message } = await uploadAvater(
      prevAvatar,
      plainFiles[0],
    );

    await new Promise((r) => setTimeout(r, 1000));

    if (!isSuccess) {
      toast.error(message);
    } else {
      toast.success(message);

      refresh();
    }

    setIsLoading(false);
  };

  return (
    <>
      <CardContent>
        <button
          type="button"
          onClick={openFilePicker}
          className="grid w-full place-items-center">
          {!isFile && (
            <Image
              src={
                prevAvatar ? `/${prevAvatar}` : `https://placehold.co/256/png`
              }
              alt=""
              height={256}
              width={256}
              className="h-64 w-64 rounded-full object-cover"
            />
          )}

          {filesContent.map((file, index) => (
            <Image
              key={index}
              src={file.content}
              alt={file.name}
              height={256}
              width={256}
              className="h-64 w-64 rounded-full object-cover"
            />
          ))}
        </button>
      </CardContent>

      <CardFooter className="justify-center">
        <Button
          type="button"
          onClick={uploadHandeler}
          disabled={!isFile || isLoading}>
          {isLoading ?
            <>
              <LoaderIcon className="animate-spin" /> Uploading...
            </>
          : <>
              <ImageUpIcon /> Upload Image
            </>
          }
        </Button>
      </CardFooter>
    </>
  );
};

export default UpdateAvatarForm;
