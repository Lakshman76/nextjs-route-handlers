import { NextRequest } from "next/server";
import { comments } from "./data";
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComments = query ? comments.filter((comment) => {
        return comment.text.includes(query);
    }) : comments;
    return Response.json(filteredComments);
}

// POST
export async function POST(req: Request) {
    const comment = await req.json();
    const newComment = {
        id: comments.length + 1,
        text: comment.text,
    };
    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
        status: 201,
        headers: {
            "Content-Type": "application/json",
        },
    });
}