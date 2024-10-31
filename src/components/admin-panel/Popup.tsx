import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { IoIosCloseCircleOutline } from "react-icons/io";

interface PropsType {
  children: React.ReactNode;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  openPopup: boolean;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
  headerText: string;
}

const Popup = ({
  children,
  setOpenPopup,
  openPopup,
  setUpdateTable,
  headerText,
}: PropsType) => {
  return (
      <Dialog 
      open={ openPopup } 
      onOpenChange={setOpenPopup}>
        <DialogTrigger asChild>
          <button className="hidden"></button>
        </DialogTrigger>
        <DialogContent
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
          className="max-w-2xl overflow-y-scroll max-h-screen"
        >
          <DialogHeader>
            <DialogTitle className="flex flex-row justify-center items-center pb-2">
              {headerText}
            </DialogTitle>
            <hr />
            <DialogDescription className="w-full mx-auto">
              {children}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
  );
};

export default Popup;
