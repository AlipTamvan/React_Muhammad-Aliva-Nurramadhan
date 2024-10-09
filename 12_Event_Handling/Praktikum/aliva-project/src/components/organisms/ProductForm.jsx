import { useState } from "react";
import { FormField } from "../molecules/FormField";
import { FileUpload } from "../molecules/FileUpload";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import Swal from "sweetalert2"; // Pastikan Anda telah mengimpor Swal

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

  // Validasi nama produk
  const validateProductName = (value) => {
    if (!value) return "Please enter a valid product name.";
    if (value.length > 25) return "Last Name must not exceed 25 characters.";
    if (value.length > 10) return "Product Name must not exceed 10 characters";
    return "";
  };

  // Validasi kategori produk
  const validateCategory = (value) => {
    return !value ? "Product category is required." : "";
  };

  // Validasi file upload
  const validateFile = (file) => {
    return !file ? "Please choose a file." : "";
  };

  // Validasi freshness
  const validateFreshness = (value) => {
    return !value ? "Please select product freshness." : "";
  };

  // Validasi deskripsi
  const validateDescription = (value) => {
    return !value ? "Description is required." : "";
  };

  // Validasi harga
  const validatePrice = (value) => {
    if (!value) return "Product price is required.";
    if (parseFloat(value) <= 0)
      return "Product price must be greater than zero.";
    return "";
  };

  const handleProductNameChange = (e) => {
    const value = e.target.value;
    const error = validateProductName(value);
    setFormData((prev) => ({ ...prev, productName: value }));
    setErrors((prev) => ({ ...prev, productName: error }));
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    const error = validateCategory(value);
    setFormData((prev) => ({ ...prev, category: value }));
    setErrors((prev) => ({ ...prev, category: error }));
  };

  const handleFileChange = (file) => {
    const error = validateFile(file);
    setFormData((prev) => ({ ...prev, file }));
    setErrors((prev) => ({ ...prev, file: error }));
  };

  const handleFreshnessChange = (e) => {
    const value = e.target.value;
    const error = validateFreshness(value);
    setFormData((prev) => ({ ...prev, freshness: value }));
    setErrors((prev) => ({ ...prev, freshness: error }));
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    const error = validateDescription(value);
    setFormData((prev) => ({ ...prev, description: value }));
    setErrors((prev) => ({ ...prev, description: error }));
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    const error = validatePrice(value);
    setFormData((prev) => ({ ...prev, price: value }));
    setErrors((prev) => ({ ...prev, price: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validasi semua field
    newErrors.productName = validateProductName(formData.productName);
    newErrors.category = validateCategory(formData.category);
    newErrors.file = validateFile(formData.file);
    newErrors.freshness = validateFreshness(formData.freshness);
    newErrors.description = validateDescription(formData.description);
    newErrors.price = validatePrice(formData.price);

    setErrors(newErrors);

    // Jika tidak ada error, tampilkan alert sukses
    if (Object.keys(newErrors).every((key) => !newErrors[key])) {
      Swal.fire({
        title: "Succeed!",
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
          confirmButton:
            "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",
        },
      });

      // Reset form jika diperlukan
      setFormData({
        productName: "",
        category: "",
        file: null,
        freshness: "",
        description: "",
        price: "",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="md:px-[140px]">
        <h2 className="text-xl font-semibold mb-2 mt-8">Detail Product</h2>
        <FormField label="Product name" error={errors.productName}>
          <Input
            value={formData.productName}
            onChange={handleProductNameChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
              errors.productName ? "border-red-500" : ""
            }`}
          />
        </FormField>

        <FormField label="Product Category" error={errors.category}>
          <select
            value={formData.category}
            onChange={handleCategoryChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
              errors.category ? "border-red-500" : ""
            }`}
          >
            <option value="">Choose...</option>
            <option>Category 1</option>
            <option>Category 2</option>
            <option>Category 3</option>
          </select>
        </FormField>

        <FileUpload onFileChange={handleFileChange} error={errors.file} />

        <FormField label="Product Freshness" error={errors.freshness}>
          {["Brand New", "Second Hand", "Refurbished"].map((option) => (
            <div key={option} className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="freshness"
                  value={option}
                  onChange={handleFreshnessChange}
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
            onChange={handleDescriptionChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-6 focus:outline-none ${
              errors.description ? "border-red-500" : ""
            }`}
            rows="3"
          />
        </FormField>

        <FormField label="Product Price" error={errors.price}>
          <Input
            type="number"
            min="0.01"
            step="0.01"
            placeholder="$ 1"
            value={formData.price}
            onChange={handlePriceChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
              errors.price ? "border-red-500" : ""
            }`}
          />
        </FormField>

        <div className="flex items-center mt-11">
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};
