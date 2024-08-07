"use client";
import { Suspense } from "react";
import { InputForm } from "./form";
import { z } from "zod";
const FormSchema = z
  .object({
    email: z.string().email(),
    username: z
      .string()
      .min(3, {
        message: "Username must be at least 3 characters.",
      })
      .max(14, {
        message: "Username must not be 16 characters or more.",
      }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirm_password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export function SignUpForm() {
  const formFields = [
    {
      name: "email",
      label: "Email",
      fieldType: "email",
      placeholder: "example@gmail.com",
    },
    {
      name: "username",
      label: "Username",
      fieldType: "text",
      placeholder: "Jhon Doe",
    },
    {
      name: "password",
      label: "Password",
      fieldType: "password",
    },
    {
      name: "confirm_password",
      label: "Confirm Password",
      fieldType: "password",
    },
  ];
  return (
    <Suspense>
      <InputForm
        type="auth"
        FormSchema={FormSchema}
        buttonLabel="Sign Up"
        formFields={formFields}
      />
    </Suspense>
  );
}
