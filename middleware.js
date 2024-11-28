import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoutes = createRouteMatcher([
  '/',
  '/dashboard'
])

export default clerkMiddleware(async(auth, req) => {
  if (isProtectedRoutes(req)) {
    await auth.protect()
  }
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)",  
    '/dashboard',
  ],
  
};