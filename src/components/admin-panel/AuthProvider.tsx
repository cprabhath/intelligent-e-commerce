"use client";
import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

const AuthProvider = ({ children }: PropsType) => {
  return <div>{children}</div>;
};

export default AuthProvider;
