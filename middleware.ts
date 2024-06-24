import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const isAuthenticated = !!req.nextauth.token;
    const isAdminRoute =  req.nextUrl.pathname.startsWith("/")

    if (isAdminRoute && !isAuthenticated) {
      const loginUrl = new URL("/authentication", req.url);
      return NextResponse.redirect(loginUrl);
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);