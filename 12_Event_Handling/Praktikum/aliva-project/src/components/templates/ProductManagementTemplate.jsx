import { Header } from "../molecules/Header";
import { ProductForm } from "../organisms/ProductForm";
import { Button } from "../atoms/Button";
import { useState } from "react";
import { article } from "../../data/article";

export const ProductManagementTemplate = () => {
  const [language, setLanguage] = useState("en");

  // Handle random number generation
  const handleRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 1000);
    console.log("Random Number:", randomNum);
  };

  // Handle language toggle
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "id" : "en"));
  };

  // Real-time product name validation
  const validateProductName = (value) => {
    let error = "";
    if (value.length > 25) {
      error = "Product Name must not exceed 25 characters.";
    } else if (value.length > 10) {
      error = "Warning: Product Name is getting long.";
    }
    return error;
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-6 py-8 md:max-w-[936px]">
        <div className="flex justify-between mb-4">
          <Button onClick={handleRandomNumber} variant="primary">
            Generate Random Number
          </Button>
          <Button onClick={toggleLanguage} variant="primary">
            {language === "en" ? "Switch to Indonesian" : "Switch to English"}
          </Button>
        </div>

        <h1 className="text-3xl font-medium mb-2 text-center font-roboto">
          {article.title[language]}
        </h1>
        <p className="text-gray-600 font-roboto font-light md:text-center mb-8">
          {article.description[language]}
        </p>
        <ProductForm />
      </main>
    </div>
  );
};
