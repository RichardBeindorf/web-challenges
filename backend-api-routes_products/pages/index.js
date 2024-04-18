import handler from "./api/products";
import Products from "./products";
import SingleProduct from "./products/[id]";

export default function HomePage() {
  return (
    <div>
      <h1><p>Hey thanks for comming by, here are our products: </p></h1>
      <Products />
      <SingleProduct />
    </div>
  );
}
