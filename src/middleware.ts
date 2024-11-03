import { NextResponse, type NextRequest } from "next/server";

//* it ensures that when the user goes to "/profile", it redirects to "/"
// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL("/", request.url))
// }
// export const config = {
//     matcher: "/profile",
// }


//* it ensures that when the user goes to "/profile", it redirects to "/hello" without changing the url
// export function middleware(request: NextRequest) {
//     if (request.nextUrl.pathname === "/profile") {
//         return NextResponse.rewrite(new URL("/hello", request.url));
//     }
// }

export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const themePreference = request.cookies.get("theme");
    if (!themePreference) {
        response.cookies.set("theme", "dark");
    }

    // setting custom header
    response.headers.set("Custom-Header", "custom value");

    return response;
}