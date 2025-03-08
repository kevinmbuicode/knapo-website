import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // Public routes that don't require authentication
  publicRoutes: [
    "/",
    "/about",
    "/membership",
    "/events",
    "/resources",
    "/advocacy",
    "/contact"
  ],
  
  // Routes that can be accessed while signed in or not
  ignoredRoutes: [
    "/api/public"
  ],
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};