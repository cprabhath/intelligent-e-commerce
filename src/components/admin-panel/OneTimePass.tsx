"use client";
import Image from "next/image";
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { OneTimePassSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
  

const OneTimePass = () => {
  const form = useForm<z.infer<typeof OneTimePassSchema>>({
    resolver: zodResolver(OneTimePassSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = (data: z.infer<typeof OneTimePassSchema>) => {
    console.log(data);
  }

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
            Please enter your OTP to continue
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-4">
              <FormField
                control={form.control}
                name="otp"
                render={({ field}) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} 
                      placeholder="Enter the OTP sent to your email address"
                      />
                      </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormError message={form.formState.errors.otp?.message} />
            <Button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default OneTimePass;
