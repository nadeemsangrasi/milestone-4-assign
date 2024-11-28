import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token =
    request.cookies.get("__Secure-next-auth.session-token") ||
    request.cookies.get("next-auth.session-token");
  const pathName = request.nextUrl.pathname;

  if (token) {
    if (pathName === "/sign-in") {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  }

  if (!token) {
    if (pathName === "/" || pathName === "/sign-in") {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/books", "/characters", "/houses", "/profile", "/sign-in"],
};
