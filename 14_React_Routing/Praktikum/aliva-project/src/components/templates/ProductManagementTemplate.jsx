import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductForm } from "../organisms/ProductForm";
import { ProductTable } from "../organisms/ProductTable";
import { article } from "../../data/article";
import { Header } from "../organisms/Header";

export const ProductManagementTemplate = () => {
  const [language, setLanguage] = useState("en");
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const navigate = useNavigate();

  const handleProductSubmit = (productData) => {
    if (editingProduct) {
      setProducts((prev) =>
        prev.map((product) =>
          product.id === editingProduct.id
            ? { ...productData, id: editingProduct.id }
            : product
        )
      );
      setEditingProduct(null);
    } else {
      const newProduct = {
        id: Date.now(),
        ...productData,
      };
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const handleRowClick = (product) => {
    navigate(`/detail/${product.id}`, { state: { product } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-6 py-8 md:max-w-[936px]">
        <h1 className="text-3xl font-medium mb-2 text-center font-roboto">
          {article.title[language]}
        </h1>
        <p className="text-gray-600 font-roboto font-light md:text-center mb-8">
          {article.description[language]}
        </p>
        <ProductForm
          onSubmit={handleProductSubmit}
          editingProduct={editingProduct}
        />
        <ProductTable
          products={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onRowClick={handleRowClick}
        />
      </main>
    </div>
  );
};
