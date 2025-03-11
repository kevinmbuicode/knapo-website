import { authMiddleware } from "@clerk/nextjs";

// Export the middleware with the simplest configuration
export default authMiddleware({
  // Public routes that don't require authentication
  publicRoutes: [
    "/",
    "/about",
    "/membership",
    "/events",
    "/resources",
    "/advocacy",
    "/contact",
    "/sign-in",
    "/sign-up"
  ]
});

// Use Clerk's recommended default matcher pattern
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
