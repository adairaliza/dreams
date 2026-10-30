import type { APIRoute } from "astro";
import { getDatabase } from "../../db/mongodb";

export const GET: APIRoute = async () => {
    try {
        const db = await getDatabase();

        return db
            .command({
                collStats: "dreams"
            }).then((result) =>
                Response.json(result ?? null)
            );
    } catch (error) {
        console.error(error);
        return Response.json(
            { error: "~ DREAMS NOT FOUND ~" },
            { status: 500 })
    }
}