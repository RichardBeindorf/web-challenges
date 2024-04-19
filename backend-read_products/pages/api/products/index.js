import dbConnect from "@/db/connect.js";
import Fish from "@/db/models/schema.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const fishes = await Fish.find();
    return response.status(200).json(fishes);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}