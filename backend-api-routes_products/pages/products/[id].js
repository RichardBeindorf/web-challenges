import { useRouter } from "next/router";
import useSWR from "swr";



export default function SingleProduct(){
    const router = useRouter();
    const { id } = router.query;
    console.log(id);
    const { data, isLoading } = useSWR(`/api/products/${id}`);
    console.log("single product", data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return console.log("Error during data fetching");
  }

    return (
    <div>
      <small>ID: {id}</small>
      <h5>{data.name}</h5>

    {/* {data.map((product) => {return <h5 key={product.id}> {product.name}</h5>
    })} */}
    </div>
    )
}