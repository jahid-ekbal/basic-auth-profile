"use server";

import { auth } from "@/lib/auth";
import { nanoid } from "nanoid";
import { headers } from "next/headers";
import { rm } from "node:fs/promises";
import sharp from "sharp";

const uploadAvater = async (
  prevAvatar: string | null | undefined,
  newAvatar: File,
) => {
  try {
    if (prevAvatar) {
      await rm(`public/${prevAvatar}`);
    }

    const imgName = `${nanoid(7)}.jpeg`;

    await sharp(await newAvatar.arrayBuffer())
      .resize({
        width: 256,
        height: 256,
      })
      .jpeg({
        mozjpeg: true,
        quality: 97,
      })
      .toFile(`public/${imgName}`);

    await auth.api.updateUser({
      body: {
        image: imgName,
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

export default uploadAvater;
