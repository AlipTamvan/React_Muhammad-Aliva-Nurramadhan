import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductForm } from "../organisms/ProductForm";
import { ProductTable } from "../organisms/ProductTable";
import { Header } from "../organisms/Header";
import useProductStore from "../../stores/productStore";

export const ProductManagementTemplate = () => {
  const [editingProduct, setEditingProduct] = useState(null);
  const navigate = useNavigate();

  const { addProduct, updateProduct } = useProductStore();

  const handleProductSubmit = (productData) => {
    if (editingProduct) {
      updateProduct({ ...productData, id: editingProduct.id });
      setEditingProduct(null);
    } else {
      addProduct(productData);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleRowClick = (product) => {
    navigate(`/detail/${product.id}`, { state: { product } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-6 py-8 md:max-w-[936px]">
        <h1 className="text-3xl font-medium mb-2 text-center font-roboto">
          Product Management
        </h1>
        <ProductForm
          onSubmit={handleProductSubmit}
          editingProduct={editingProduct}
        />
        <ProductTable onEdit={handleEdit} onRowClick={handleRowClick} />
      </main>
    </div>
  );
};
