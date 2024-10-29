// src/services/productApi.js
import axios from "axios";
import cloudinaryService from "./cloudinaryService";

const BASE_URL = "https://6718b0447fc4c5ff8f4a9341.mockapi.io";

const transformProductForApi = async (product) => {
  try {
    let imageUrl = product.image;

    // If image is a File/Blob, upload to Cloudinary
    if (product.image instanceof File || product.image instanceof Blob) {
      imageUrl = await cloudinaryService.uploadImage(product.image);
    }

    return {
      productName: product.productName,
      productCategory: product.productCategory,
      image: imageUrl,
      productFreshness: product.productFreshness,
      additionalDescription: product.additionalDescription,
      productPrice: parseFloat(product.productPrice),
    };
  } catch (error) {
    throw new Error("Failed to process product data: " + error.message);
  }
};

const productApi = {
  // Get all products
  getAllProducts: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch products: " + error.message);
    }
  },

  // Get product by ID
  getProductById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/products/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch product: " + error.message);
    }
  },

  // Create new product
  createProduct: async (productData) => {
    try {
      const transformedData = await transformProductForApi(productData);
      const response = await axios.post(
        `${BASE_URL}/products`,
        transformedData
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to create product: " + error.message);
    }
  },

  // Update product
  updateProduct: async (id, productData) => {
    try {
      const transformedData = await transformProductForApi(productData);
      const response = await axios.put(
        `${BASE_URL}/products/${id}`,
        transformedData
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to update product: " + error.message);
    }
  },

  // Delete product
  deleteProduct: async (id) => {
    try {
      await axios.delete(`${BASE_URL}/products/${id}`);
      return true;
    } catch (error) {
      throw new Error("Failed to delete product: " + error.message);
    }
  },
};

export default productApi;
