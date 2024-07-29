import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<String[]>([]);
  useEffect(() => {
    console.log("Fetching Products in", category);
    setProducts(["Cookies", "Cake"]);
  }, [category]);

  return (
    <div>
      <h1>Product List</h1>
    </div>
  );
};

export default ProductList;
