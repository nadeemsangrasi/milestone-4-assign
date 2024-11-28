"use client";
import React from "react";
import Wrapper from "../shared/Wrapper";
import Link from "next/link";
import { GoSignIn } from "react-icons/go";
import { LuLogOut } from "react-icons/lu";
import { useSession, signOut } from "next-auth/react";

import Image from "next/image";
const Header = () => {
  const { data: session, status } = useSession();

  return (
    <Wrapper>
      <div className="z-50 flex justify-between items-center bg-secondary-black text-white px-2 sm:px-4 py-4 mt-2 shadow-2xl w-full  sm:w-[90%]  fixed left-1/2 -translate-x-1/2">
        <h1 className="font-bold text-xl sm:text-2xl text-emerald-300">
          <Link href={"/"}>EliteEcom</Link>
        </h1>
        <div>
          <ul className="flex gap-2 sm:gap-4 items-center">
            <li className="text-semibold text-sm sm:text-xl  hover:text-emerald-500">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-semibold text-sm sm:text-xl  hover:text-emerald-500">
              <Link href={"/products"}>Products</Link>
            </li>
            <li className="text-semibold text-sm sm:text-xl hover:text-emerald-500">
              <Link href={"/blogs"}>Blogs</Link>
            </li>
            {status === "unauthenticated" ? (
              <Link href={"/sign-in"}>
                <GoSignIn className="text-3xl" />
              </Link>
            ) : (
              <div className="flex items-center space-x-4">
                {status === "authenticated" && (
                  <Link href={"/profile"}>
                    <Image
                      src={session?.user?.image || ""}
                      alt={session?.user?.name || "User Image"}
                      className="w-10 h-10 rounded-full"
                      width={40}
                      height={40}
                    />
                  </Link>
                )}

                <LuLogOut
                  onClick={() => signOut()}
                  className="text-3xl cursor-pointer"
                />
              </div>
            )}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
