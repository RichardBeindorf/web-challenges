import dbConnect from "@/db/connect.js";
import Fish from "@/db/models/schema.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const fishes = await Fish.findById(id).populate("reviews");
    // hier ist die Frage, ob ich bei populate die propertie oder model datei angebe
    
    if(!fishes){return response.status(404).json({ status: "Not Found" })};
    
    response.status(200).json(fishes);
  }
}