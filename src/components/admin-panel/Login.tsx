"use client";
import Image from "next/image";
import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AdminLogin } from "@/actions/login";
import { ClockLoader } from "react-spinners";
import { LoginSchema } from "@/schemas";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { FormError } from "@/components/form-error";
import { FormSucess } from "../form-success";
import { redirect } from "next/navigation";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Login = () => {
  const [error, setError] = useState<string | undefined | any>("");
  const [success, setSuccess] = useState<string | undefined | any>("");
  const [showOTP, setShowOTP] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    setIsSubmitting(true);
    setSuccess("");
    setError("");

    try {
      const res = await AdminLogin(data);

      if (res.error) {
        form.reset({ username: data.username });
        setError(res.error);
      } else if (res.OTP) {
        setShowOTP(true);
      } else if (res.redirect) {
        redirect(DEFAULT_LOGIN_REDIRECT);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <div className="object-cover w-full h-full flex justify-center items-center bg-gradient-to-b from-amber-500 to-amber-300">
          <Image
            src="/logo.png"
            alt="Placeholder Image"
            width={400}
            height={40}
          />
        </div>
      </div>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-4xl font-semibold mb-4 text-center">Admin Panel</h1>
        <p className="text-xl mb-4 text-center">
          Please enter your username to continue
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter your username"
                        disabled={showOTP}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            {showOTP && (
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter OTP sent to your email"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            )}
            <FormError
              message={form.formState.errors.username?.message || error}
            />
            {success && <FormSucess message={success} />}
            <Button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md py-2 px-4 w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <ClockLoader size={18} color="#ffffff" />
              ) : showOTP ? (
                "Verify OTP & Login"
              ) : (
                "Continue"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
