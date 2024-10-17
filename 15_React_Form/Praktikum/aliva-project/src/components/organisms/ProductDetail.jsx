import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Button } from "../atoms/Button";
import { useEffect, useState } from "react";

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (location.state && location.state.product) {
      setProduct(location.state.product);
    } else {
      console.log("Product not found in state. ID:", id);
    }
  }, [location.state, id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Product Details</h2>
      <div className="mb-4">
        <strong>Product Name:</strong> {product.productName}
      </div>
      <div className="mb-4">
        <strong>Category:</strong> {product.category}
      </div>
      <div className="mb-4">
        <strong>Freshness:</strong> {product.freshness}
      </div>
      <div className="mb-4">
        <strong>Price:</strong> ${product.price}
      </div>
      <div className="mb-4">
        <strong>Description:</strong> {product.description}
      </div>
      {product.file && (
        <div className="mb-4">
          <strong>Image:</strong>
          <img
            src={URL.createObjectURL(product.file)}
            alt={product.productName}
            className="mt-2 max-w-xs"
          />
        </div>
      )}
      <Button onClick={() => navigate("/product-management")} className="mt-4">
        Back to Products
      </Button>
    </div>
  );
};
