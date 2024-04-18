import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Products(){
    const { data, isLoading } = useSWR("./api/products", fetcher);

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