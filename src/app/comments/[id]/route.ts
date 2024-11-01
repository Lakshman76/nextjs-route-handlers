import { comments } from "../data";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const comment = comments.find((comment) => {
        return comment.id === parseInt(params.id);
    })
    return Response.json(comment);
}