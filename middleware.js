import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
const getCookie = async (name) => {
  return cookies().get(name)?.value ?? "";
};

export async function middleware(request, context) {
  console.log("test middle dijalankan");
  const token = await getCookie("token");
  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  const decodedToken = jwt.decode(token);
  if (decodedToken) {
    context.userRole = decodedToken.role;
    const userRole = context.userRole
    console.log("User role:", userRole);
    
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/main/:path*"],
};
