export { default } from "next-auth/middleware";

export const config = {
  // Defining the routes which i want to be protected(Only for who is signed In to access them)
  matcher: ["/properties/add", "/profile", "/properties/saved", "/messages"],
};
