import { getAllProducts } from "@/services/productServices"; //does this work?


export default function handler(request, response) {
    console.log("get all function:", getAllProducts())
    response.status(200).json(getAllProducts());
  }