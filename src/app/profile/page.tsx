"use client";

import Wrapper from "@/components/shared/Wrapper";
import React from "react";
import { signOut, useSession } from "next-auth/react";

import Image from "next/image";

const ProfilePage = (): JSX.Element => {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") {
    return (
      <div className="flex items-center justify-center mt-48 text-3xl font-bold max-w-screen-2xl mx-auto">
        user not authenticated
      </div>
    );
  }
  return (
    <Wrapper>
      <div className="flex flex-col items-center justify-center pt-24">
        <div className="border-2 w-full sm:w-3/4 md:w-2/3 lg:w-1/3 py-6 px-8 mx-auto rounded-lg shadow-2xl text-center">
          {status === "loading" ? (
            <h1 className="text-3xl font-semibold mb-6">Profile Loading...</h1>
          ) : (
            <>
              <h1 className="text-3xl font-semibold mb-6">User Profile</h1>
              {session?.user?.image && (
                <Image
                  src={session?.user.image}
                  alt={session?.user.name || "User Image"}
                  width={100}
                  height={100}
                  className="rounded-full mb-4 mx-auto"
                />
              )}
              <p className="text-xl mb-2">
                <strong>Name:</strong> {session?.user?.name}
              </p>
              <p className="text-xl mb-4">
                <strong>Email:</strong> {session?.user?.email}
              </p>
              <button
                className="text-lg font-bold px-4 py-2 bg-red-600 text-white rounded"
                onClick={() => signOut()}
              >
                Log out
              </button>
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default ProfilePage;
