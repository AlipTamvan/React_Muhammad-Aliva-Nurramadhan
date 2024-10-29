import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductForm } from "../organisms/ProductForm/ProductForm";
import { ProductTable } from "../organisms/ProductTable";
import { Header } from "../organisms/Header";
import useProductStore from "../../stores/productStore";

export const ProductManagementTemplate = () => {
  const [editingProduct, setEditingProduct] = useState(null);
  const navigate = useNavigate();
  const { addProduct, updateProduct, fetchProducts, loading, error } =
    useProductStore();

  // Fetch products when component mounts
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleProductSubmit = async (productData) => {
    try {
      if (editingProduct) {
        await updateProduct({ ...productData, id: editingProduct.id });
        setEditingProduct(null);
      } else {
        await addProduct(productData);
      }
    } catch (error) {
      console.error("Failed to save product:", error);
      // Handle error (show toast/alert)
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
    navigate(`/detail/${product.id}`);
  };

  // if (loading) {
  //   return <div></div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

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
        <ProductTable
          // loading={loading}
          onEdit={handleEdit}
          onRowClick={handleRowClick}
        />
      </main>
    </div>
  );
};
