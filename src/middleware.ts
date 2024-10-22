import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const restrictedRoutes = ["/blogs"];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (restrictedRoutes.some((route) => path.startsWith(route))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
