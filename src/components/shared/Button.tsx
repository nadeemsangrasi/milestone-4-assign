import { IButtonProps } from "@/types/types";
import Link from "next/link";
import React from "react";

const Button = ({ label, url, className }: IButtonProps) => {
  return (
    <button className={`font-bold text-xl px-8 py-2 rounded-lg ${className}`}>
      <Link href={url || ""}>{label}</Link>
    </button>
  );
};

export default Button;
