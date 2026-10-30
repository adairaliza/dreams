import type { APIRoute } from "astro";
import { getDatabase } from "../../db/mongodb";

export const GET: APIRoute = async () => {
    try {
        const db = await getDatabase();

        return db
            .collection("dreams")
            .aggregate([{ $sample: { size: 1 } }])
            .toArray().then((result) =>
                Response.json(result[0] ?? null)
            );
    } catch (error) {
        console.error(error);
        return Response.json(
            { error: "~ DREAM NOT FOUND ~" },
            { status: 500 })
    }
}