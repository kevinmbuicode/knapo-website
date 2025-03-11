import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/about",
    "/membership",
    "/events",
    "/resources",
    "/advocacy",
    "/contact",
    "/api/(.*)",
    "/sign-in",
    "/sign-up"
  ],
  ignoredRoutes: [
    "/(api|trpc)/(.*)"
  ]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
