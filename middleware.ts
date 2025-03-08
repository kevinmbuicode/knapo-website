// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// //chatbot is protected
// const isProtectedRoute = createRouteMatcher(["/member-dashboard(.*)"]);

// export default clerkMiddleware(async (auth, req) => {
//   const { userId, redirectToSignIn } = await auth();

//   if (!userId && isProtectedRoute(req)) {
//     //redirect to sign in page
//     return redirectToSignIn();
//   }
// });

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//   ],
// };

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Protected route matcher for member-dashboard paths
const isProtectedRoute = createRouteMatcher(["/member-dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();
  
  if (!userId && isProtectedRoute(req)) {
    // Redirect to sign in page if user tries to access member dashboard while not logged in
    return redirectToSignIn();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
