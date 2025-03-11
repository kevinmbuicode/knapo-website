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

// Export the matcher configuration
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(png|jpg|jpeg|svg|gif)).*)"
  ],
};
