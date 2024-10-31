import { comments } from "./data";
export async function GET() {
    return new Response(JSON.stringify(comments), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
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