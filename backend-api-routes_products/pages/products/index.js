import useSWR from "swr";



export default function Products(){
    const { data, isLoading } = useSWR("./api/products");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

    return (
    <ul>
    {data.map((product) => {return <li key={product.id}>
            {product.name}
        </li>
    })}
    </ul>
    )
}