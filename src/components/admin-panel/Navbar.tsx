import Image from "next/image";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Profile from "@/components/admin-panel/Profile";
import { redirect } from "next/navigation";
import { DEFAULD_LOGIN_ROUTE } from "@/routes";

const Navbar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSettingsClick = () => {
    setIsDialogOpen(true);
  };

  const handleLogout = () => {
    redirect(DEFAULD_LOGIN_ROUTE);
  }

  return (
    <>
      <div className="py-3 px-4 bg-white flex justify-between items-center">
        <h2 className="text-xl">Admin Panel</h2>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Image
                src="/avatar.png"
                alt="avatar"
                width={30}
                height={30}
                className="rounded-full"
              />
              <span>Admin</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSettingsClick}>
              Manage Account
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <button className="hidden"></button>
        </DialogTrigger>
        <DialogContent
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
          className="max-w-2xl"
        >
          <DialogHeader>
            <DialogTitle className="flex flex-row justify-center items-center pb-2">
              Manage Account
            </DialogTitle>
            <hr />
            <DialogDescription className="w-auto pt-2">
              <Profile />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
