import { useRouter } from "next/router";
import useSWR from "swr";

export default function SingleProduct(){
    const router = useRouter();
    const { id } = router.query;
    const { data, isLoading } = useSWR(`./api/products/${id}`, fetcher);
    console.log("data in [id]js", data);


  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

    return (
    <div>
    {data.map((product) => {return <h5 key={product.id}> {product.name}</h5>
    })}
    </div>
    )
}
