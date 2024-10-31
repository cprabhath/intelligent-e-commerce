"use client";

import React, { useState } from "react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ProdcutSchema } from "@/schemas";
import { FormError } from "@/components/form-error";
import { useForm } from "react-hook-form";

interface IPayload {
  imgSrc: null | string;
  fileKey: null | string;
}

const ProductForm = () => {
  const form = useForm<z.infer<typeof ProdcutSchema>>({
    resolver: zodResolver(ProdcutSchema),
    defaultValues: {
      image: "",
      name: "",
      price: "",
      brand: "",
      stock: "",
      category: "",
      description: "",
    },
  });

  const [payload, setPayload] = useState<IPayload>({
    imgSrc: null,
    fileKey: null,
  });

  const onSubmit = (data: z.infer<typeof ProdcutSchema>) => {
    // merge the image data with the form data
    const productData = {
      ...data,
      image: payload.fileKey,
    };

    console.log(productData);
  };

  return (
    <div className="overflow-auto p-2">
      <Form {...form}>
        <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
          <Image
            className="max-h-[100px] w-auto object-contain rounded-md"
            src={payload.imgSrc ? payload.imgSrc : "/placeholder.jpg"}
            width={150}
            height={100}
            alt="Product Image"
          />
          <div>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setPayload({
                      imgSrc: reader.result as string,
                      fileKey: file.name,
                    });
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </div>
          <div>
          <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                    <Label>Product Name</Label>
                    <Input
                      {...field}
                      placeholder="Product Name"
                    />
                    </>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div>
          <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                  <>
                    <Label>Product Price</Label>
                    <Input
                      {...field}
                      placeholder="Product Price"
                    />
                    </>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div>
          <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                  <>
                    <Label>Product Brand</Label>
                    <Input
                      {...field}
                      placeholder="Product Brand"
                    />
                    </>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div>
          <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                  <>
                    <Label>Product Stock</Label>
                    <Input
                      {...field}
                      placeholder="Product Stock"
                    />
                    </>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div>
          <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                  <>
                    <Label>Product Category</Label>
                    <Input
                      {...field}
                      placeholder="Product Category"
                    />
                    </>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div>
          <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                  <>
                    <Label>Product Description</Label>
                    <Input
                      {...field}
                      placeholder="Product Description"
                    />
                    </>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormError
              message={form.formState.errors.name?.message || form.formState.errors.price?.message || form.formState.errors.brand?.message || form.formState.errors.category?.message || form.formState.errors.description?.message || form.formState.errors.stock?.message}
            />
          <div className="flex justify-end">
            <Button className="bg-[#ffb929] hover:bg-[#be8e2d] text-black px-8 py-2 rounded-md block w-full">
              Update Product
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProductForm;
