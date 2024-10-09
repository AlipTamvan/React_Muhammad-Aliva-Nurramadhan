import { useState } from "react";

import { FormField } from "../molecules/FormField";
import { FileUpload } from "../molecules/FileUpload";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";

export const ProductForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    file: null,
    freshness: "",
    description: "",
    price: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation logic
    if (!formData.productName)
      newErrors.productName = "Product name is required.";
    if (!formData.category)
      newErrors.category = "Product category is required.";
    if (!formData.file) newErrors.file = "Please choose a file.";
    if (!formData.freshness)
      newErrors.freshness = "Please select product freshness.";
    if (!formData.description)
      newErrors.description = "Description is required.";
    if (!formData.price) newErrors.price = "Product price is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Success handling
      Swal.fire({
        title: "Succeed!",
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
          confirmButton:
            "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="md:px-[140px]">
      <h2 className="text-xl font-semibold mb-2 mt-8">Detail Product</h2>
      <FormField label="Product name" error={errors.productName}>
        <Input
          value={formData.productName}
          onChange={(e) =>
            setFormData({ ...formData, productName: e.target.value })
          }
          error={errors.productName}
        />
      </FormField>

      <FormField label="Product Category" error={errors.category}>
        <select
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.category ? "border-red-500" : ""
          }`}
        >
          <option value="">Choose...</option>
          <option>Category 1</option>
          <option>Category 2</option>
          <option>Category 3</option>
        </select>
      </FormField>

      <FileUpload
        onFileChange={(file) => setFormData({ ...formData, file })}
        error={errors.file}
      />

      <FormField label="Product Freshness" error={errors.freshness}>
        {["Brand New", "Second Hand", "Refurbished"].map((option) => (
          <div key={option} className="mb-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="freshness"
                value={option}
                onChange={(e) =>
                  setFormData({ ...formData, freshness: e.target.value })
                }
                className="form-radio"
              />
              <span className="ml-2 font-roboto font-normal leading-6">
                {option}
              </span>
            </label>
          </div>
        ))}
      </FormField>

      <FormField label="Additional Description" error={errors.description}>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-6 focus:outline-none focus:shadow-outline ${
            errors.description ? "border-red-500" : ""
          }`}
          rows="3"
        />
      </FormField>

      <FormField label="Product Price" error={errors.price}>
        <Input
          type="number"
          min="1"
          step="0.01"
          placeholder="$ 1"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          error={errors.price}
        />
      </FormField>

      <div className="flex items-center mt-11">
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </div>
    </form>
  );
};
