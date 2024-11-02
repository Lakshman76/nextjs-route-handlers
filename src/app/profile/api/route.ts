import { headers, cookies } from "next/headers";

export async function GET() {
    const headersList = headers();
    console.log((await headersList).get("Connection")); // keep-alive

    // set and get cookie
    const cookiesList = await cookies();
    cookiesList.set("resultsPerPage", "20");
    console.log(cookiesList.get("resultsPerPage")); // { name: 'resultsPerPage', value: '20', path: '/' }

    return new Response("<h1>profile API data! </h1>", {
        headers: {
            "Content-Type": "text/html",
            "set-cookie": "theme=dark",
        }
    });
}