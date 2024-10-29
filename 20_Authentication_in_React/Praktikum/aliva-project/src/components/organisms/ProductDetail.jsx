import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../atoms/Button";
import useProductStore from "../../stores/productStore";

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useProductStore();

  const product = products.find((p) => p.id === id);

  if (!product) return <div>Loading...</div>;

  const renderProductImage = (image) => {
    if (image instanceof Blob || image instanceof File) {
      return (
        <img
          src={URL.createObjectURL(image)}
          alt="Product"
          className="h-auto w-25"
        />
      );
    } else if (typeof image === "string" && image.startsWith("data:")) {
      return <img src={image} alt="Product" className="h-auto w-25" />;
    } else if (
      typeof image === "string" &&
      (image.startsWith("http://") || image.startsWith("https://"))
    ) {
      return <img src={image} alt="Product" className="h-auto w-25" />;
    } else {
      return "No Image";
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Product Details</h2>
      <div className="mb-4">
        <strong>Product Name:</strong> {product.productName}
      </div>
      <div className="mb-4">
        <strong>Category:</strong> {product.productCategory}
      </div>
      <div className="mb-4">
        <strong>Freshness:</strong> {product.productFreshness}
      </div>
      <div className="mb-4">
        <strong>Price:</strong> ${product.productPrice}
      </div>
      <div className="mb-4">
        <strong>Description:</strong> {product.additionalDescription}
      </div>
      {product.image && (
        <div className="mb-4">
          <strong>Image:</strong>
          {renderProductImage(product.image)}
        </div>
      )}
      <Button onClick={() => navigate("/product-management")} className="mt-4">
        Back to Products
      </Button>
    </div>
  );
};
