import { authMiddleware } from "@clerk/nextjs";

// Export the middleware with public routes
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
    "/api/(.*)",
    "/sign-in",
    "/sign-up"
  ],
  
  // Routes that should be ignored by the middleware
  ignoredRoutes: [
    "/(api|trpc)/(.*)"
  ]
});

// Export the matcher configuration with a simpler pattern
export const config = {
  matcher: [
    "/((?!_next|images|api|.*\\.ico$).*)"
  ],
};
