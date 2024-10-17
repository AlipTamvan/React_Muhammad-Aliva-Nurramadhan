// ProductForm.js
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormField } from "../molecules/FormField";
import { FileUpload } from "../molecules/FileUpload";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import Swal from "sweetalert2";

export const ProductForm = ({ onSubmit, editingProduct }) => {
  const [resetFileName, setResetFileName] = useState(false);

  const validationSchema = Yup.object().shape({
    productName: Yup.string()
      .matches(
        /^[a-zA-Z0-9\s]{3,}$/,
        "Product name must be alphanumeric and at least 3 characters long"
      )
      .max(25, "Product Name must not exceed 25 characters")
      .required("Product name is required"),
    category: Yup.string().required("Product category is required"),
    image: Yup.mixed()
      .required("Image is required")
      .test(
        "fileFormat",
        "Unsupported Format. Only PNG, JPG, JPEG are allowed.",
        (value) =>
          value && ["image/png", "image/jpeg", "image/jpg"].includes(value.type)
      ),
    freshness: Yup.string().required("Product freshness is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
      .positive("Price must be greater than zero")
      .required("Product price is required"),
  });

  const formik = useFormik({
    initialValues: {
      productName: "",
      category: "",
      image: null,
      freshness: "",
      description: "",
      price: "",
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
      Swal.fire({
        title: "Success!",
        text: editingProduct
          ? "Product updated successfully!"
          : "Product added successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
      formik.resetForm();
      setResetFileName(true);
    },
  });

  useEffect(() => {
    if (editingProduct) {
      formik.setValues({
        productName: editingProduct.productName || "",
        category: editingProduct.category || "",
        image: editingProduct.image || null,
        freshness: editingProduct.freshness || "",
        description: editingProduct.description || "",
        price: editingProduct.price || "",
      });
      setResetFileName(false);
    }
  }, [editingProduct]);

  return (
    <form onSubmit={formik.handleSubmit} className="md:px-[140px]">
      <h2 className="text-xl font-semibold mb-2 mt-8">
        {editingProduct ? "Edit Product" : "Detail Product"}
      </h2>

      <FormField label="Product name" error={formik.errors.productName}>
        <Input
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

      <FormField label="Product Category" error={formik.errors.category}>
        <select
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
            formik.errors.category && formik.touched.category
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
        name="image"
        onFileChange={(file) => formik.setFieldValue("image", file)}
        error={formik.errors.image}
        resetFileName={resetFileName}
        initialFileName={editingProduct?.image?.name}
      />

      <FormField label="Product Freshness" error={formik.errors.freshness}>
        {["Brand New", "Second Hand", "Refurbished"].map((option) => (
          <div key={option} className="mb-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="freshness"
                value={option}
                checked={formik.values.freshness === option}
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
        error={formik.errors.description}
      >
        <textarea
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-6 focus:outline-none ${
            formik.errors.description && formik.touched.description
              ? "border-red-500"
              : ""
          }`}
          rows="3"
        />
      </FormField>

      <FormField label="Product Price" error={formik.errors.price}>
        <Input
          type="number"
          name="price"
          min="0.01"
          step="0.01"
          placeholder="$ 1"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
            formik.errors.price && formik.touched.price ? "border-red-500" : ""
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
