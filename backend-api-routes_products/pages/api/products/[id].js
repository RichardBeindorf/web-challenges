import { getProductById } from "@/services/productServices";


export default function singleProduct(request, response){
    const { id } = request.query;

    return response.status(200).json(getProductById(id))
    // request.query(`/api/products/${[id]}`))
}