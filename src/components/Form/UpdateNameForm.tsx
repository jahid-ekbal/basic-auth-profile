"use client";

import { updateNameFormSchema, UpdateNameFormType } from "@/lib/zodSchema";
import updateName from "@/server/updateName";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, UserRoundPenIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";
import { CardContent, CardFooter } from "../shadcnui/card";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

type UpdateNameFormProps = {
  prevName: string;
};

const UpdateNameForm = ({ prevName }: UpdateNameFormProps) => {
  const { refresh } = useRouter();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isDirty },
  } = useForm({
    resolver: zodResolver(updateNameFormSchema),
    defaultValues: {
      name: prevName,
    },
    mode: "all",
  });

  const nameUpdateHandeler = async ({ name }: UpdateNameFormType) => {
    const { isSuccess, message } = await updateName(name);

    await new Promise((r) => setTimeout(r, 1000));

    if (!isSuccess) {
      toast.error(message);
    } else {
      toast.success(message);

      refresh();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(nameUpdateHandeler)}
      className=""
      noValidate>
      <CardContent className="mb-4">
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="text"
                aria-invalid={fieldState.invalid}
                placeholder="Enter your full name"
                autoComplete="name"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </CardContent>

      <CardFooter className="justify-center">
        <Button
          type="submit"
          disabled={isSubmitting || !isDirty}>
          {isSubmitting ?
            <>
              <LoaderIcon className="animate-spin" /> Updating...
            </>
          : <>
              <UserRoundPenIcon /> Update
            </>
          }
        </Button>
      </CardFooter>
    </form>
  );
};

export default UpdateNameForm;
