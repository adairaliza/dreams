import { MongoClient } from "mongodb";
import { MONGODB_URI } from "astro:env/server";

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

interface GlobalMongo {
    _mongoClientPromise?: Promise<MongoClient>;
}

declare global {
    var mongo: GlobalMongo | undefined;
}

client = new MongoClient(MONGODB_URI);
console.log(client);
clientPromise = client.connect();

export async function getDatabase(dbName = "dreams") {
    const connectedClient = await clientPromise;
    return connectedClient.db(dbName);
}
