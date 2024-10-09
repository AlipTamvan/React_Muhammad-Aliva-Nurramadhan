import { Header } from "../molecules/Header";
import { ProductForm } from "../organisms/ProductForm";
import { ProductTable } from "../organisms/ProductTable";
import { Button } from "../atoms/Button";
import { useState } from "react";
import { article } from "../../data/article";

export const ProductManagementTemplate = () => {
  const [language, setLanguage] = useState("en");
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleProductSubmit = (productData) => {
    if (editingProduct) {
      // Update existing product
      setProducts((prev) =>
        prev.map((product) =>
          product.id === editingProduct.id
            ? { ...productData, id: editingProduct.id }
            : product
        )
      );
      setEditingProduct(null);
    } else {
      // Add new product
      const newProduct = {
        id: Date.now(), // Use timestamp as unique ID
        ...productData,
      };
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    // Scroll to form
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
        />
      </main>
    </div>
  );
};
