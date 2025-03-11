import { authMiddleware } from "@clerk/nextjs";

// List of paths that should be publicly accessible without authentication
const publicRoutes = [
  "/",
  "/about",
  "/membership",
  "/events",
  "/resources",
  "/advocacy",
  "/contact",
  "/sign-in",
  "/sign-up"
];

// Export the middleware with defined public routes
export default authMiddleware({
  publicRoutes: publicRoutes,
  // Optional: define a function to handle what happens when an unauthenticated user
  // tries to access a protected route
  afterAuth(auth, req, evt) {
    // If the user is not authenticated and trying to access a non-public route
    if (!auth.userId && !publicRoutes.some(route => 
      req.nextUrl.pathname === route || 
      req.nextUrl.pathname.startsWith(`${route}/`)
    )) {
      // Redirect to the sign-in page with a return_back_to parameter
      const signInUrl = new URL('/sign-in', req.url);
      signInUrl.searchParams.set('redirect_url', req.url);
      return evt.redirect(signInUrl);
    }
  }
});

// Export the matcher configuration
export const config = {
  matcher: [
    // Match all paths except Next.js internals and static files
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|gif|png|svg|webp|css|js)$).*)"
  ],
};
