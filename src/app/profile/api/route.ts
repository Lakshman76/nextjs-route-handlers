import { headers } from "next/headers";

export async function GET() {
    const headersList = headers();
    console.log((await headersList).get("Connection")); // keep-alive
    return new Response("<h1>profile API data! </h1>", {
        headers: {
            "Content-Type": "text/html",
        }
    });
}