import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormField } from "../../molecules/FormField";
import { FileUpload } from "../../molecules/FileUpload";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import Swal from "sweetalert2";

export const ProductForm = ({ onSubmit, editingProduct }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const validationSchema = Yup.object().shape({
    productName: Yup.string()
      .matches(
        /^[a-zA-Z0-9\s]{3,}$/,
        "Product name must be alphanumeric and at least 3 characters long"
      )
      .max(25, "Product Name must not exceed 25 characters")
      .required("Product name is required"),
    productCategory: Yup.string().required("Product category is required"),
    image: Yup.mixed()
      .required("Image is required")
      .test(
        "fileFormat",
        "Unsupported Format. Only PNG, JPG, JPEG are allowed.",
        (value) =>
          value && ["image/png", "image/jpeg", "image/jpg"].includes(value.type)
      ),
    productFreshness: Yup.string().required("Product freshness is required"),
    additionalDescription: Yup.string().required("Description is required"),
    productPrice: Yup.number()
      .positive("Price must be greater than zero")
      .required("Product price is required"),
  });

  const formik = useFormik({
    initialValues: {
      productName: "",
      productCategory: "",
      image: null,
      productFreshness: "",
      additionalDescription: "",
      productPrice: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await onSubmit(values); 
        Swal.fire({
          title: "Success!",
          text: editingProduct
            ? "Product updated successfully!"
            : "Product added successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        formik.resetForm();
        setErrorMessage(""); 
      } catch (error) {
        setErrorMessage("Failed to save data"); // Set error message
        Swal.fire({
          title: "Error!",
          text: "Failed to save data",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
  });

  useEffect(() => {
    if (editingProduct) {
      formik.setValues({
        productName: editingProduct.productName || "",
        productCategory: editingProduct.productCategory || "",
        image: editingProduct.image || null,
        productFreshness: editingProduct.productFreshness || "",
        additionalDescription: editingProduct.additionalDescription || "",
        productPrice: editingProduct.productPrice || "",
      });
    }
  }, [editingProduct]);

  return (
    <form onSubmit={formik.handleSubmit} className="md:px-[140px]">
      <h2 className="text-xl font-semibold mb-2 mt-8">
        {editingProduct ? "Edit Product" : "Add New Product"}
      </h2>
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}{" "}
      {/* Tampilkan pesan kesalahan */}
      <FormField
        label="Product name"
        error={formik.errors.productName}
        id="productName"
      >
        <Input
          id="productName"
          name="productName"
          value={formik.values.productName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
            formik.errors.productName && formik.touched.productName
              ? "border-red-500"
              : ""
          }`}
        />
      </FormField>
      <FormField
        label="Product Category"
        error={formik.errors.productCategory}
        id="productCategory"
      >
        <select
          id="productCategory"
          name="productCategory"
          value={formik.values.productCategory}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
            formik.errors.productCategory && formik.touched.productCategory
              ? "border-red-500"
              : ""
          }`}
        >
          <option value="">Choose...</option>
          <option>Category 1</option>
          <option>Category 2</option>
          <option>Category 3</option>
        </select>
      </FormField>
      <FileUpload
        id="image"
        name="image"
        onFileChange={(file) => formik.setFieldValue("image", file)}
        error={formik.errors.image}
      ></FileUpload>
      <FormField
        label="Product Freshness"
        error={formik.errors.productFreshness}
        id="productFreshness"
      >
        {["Brand New", "Second Hand", "Refurbished"].map((option) => (
          <div key={option} className="mb-2">
            <label
              htmlFor={`freshness-${option}`}
              className="inline-flex items-center"
            >
              <input
                type="radio"
                id={`freshness-${option}`}
                name="productFreshness"
                value={option}
                checked={formik.values.productFreshness === option}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-radio"
              />
              <span className="ml-2 font-roboto font-normal leading-6">
                {option}
              </span>
            </label>
          </div>
        ))}
      </FormField>
      <FormField
        label="Additional Description"
        error={formik.errors.additionalDescription}
        id="additionalDescription"
      >
        <textarea
          id="additionalDescription"
          name="additionalDescription"
          value={formik.values.additionalDescription}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
            formik.errors.additionalDescription &&
            formik.touched.additionalDescription
              ? "border-red-500"
              : ""
          }`}
          rows="3"
        />
      </FormField>
      <FormField
        label="Product Price"
        error={formik.errors.productPrice}
        id="productPrice"
      >
        <Input
          id="productPrice"
          type="number"
          name="productPrice"
          min="0.01"
          step="0.01"
          placeholder="$ 1"
          value={formik.values.productPrice}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
            formik.errors.productPrice && formik.touched.productPrice
              ? "border-red-500"
              : ""
          }`}
        />
      </FormField>
      <div className="flex items-center mt-11">
        <Button type="submit" className="w-full">
          {editingProduct ? "Update Product" : "Submit"}
        </Button>
      </div>
    </form>
  );
};
