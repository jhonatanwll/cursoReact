import { useFetch } from "../hooks/useFetch";

import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  const url = "http://localhost:3000/products/" + id;

  const { data: product } = useFetch(url);

  return (
    <div>
      <p>ID do produto: {id}</p>
      <div>
      </div>
    </div>
  );
};

export default Product;
