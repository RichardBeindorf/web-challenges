import handler from "./api/products";
import Products from "./products";

export default function HomePage() {
  return (
    <div>
      <h1><p>Hey thanks for comming by, here are our products: </p></h1>
      <Products />
    </div>
  );
}
