// src/stores/productStore.js
import { create } from 'zustand';
import productApi from '../services/productApi';

const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,

  // Fetch all products
  fetchProducts: async () => {
    set({ loading: true });
    try {
      const products = await productApi.getAllProducts();
      set({ products, loading: false, error: null });
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },

  // Add new product
  addProduct: async (productData) => {
    set({ loading: true });
    try {
      const newProduct = await productApi.createProduct(productData);
      set((state) => ({
        products: [...state.products, newProduct],
        loading: false,
        error: null,
      }));
      return newProduct;
    } catch (error) {
      set({ loading: false, error: error.message });
      throw error;
    }
  },

  // Update product
  updateProduct: async (productData) => {
    set({ loading: true });
    try {
      const updatedProduct = await productApi.updateProduct(
        productData.id,
        productData
      );
      set((state) => ({
        products: state.products.map((product) =>
          product.id === productData.id ? updatedProduct : product
        ),
        loading: false,
        error: null,
      }));
      return updatedProduct;
    } catch (error) {
      set({ loading: false, error: error.message });
      throw error;
    }
  },

  // Delete product
  deleteProduct: async (id) => {
    set({ loading: true });
    try {
      await productApi.deleteProduct(id);
      set((state) => ({
        products: state.products.filter((product) => product.id !== id),
        loading: false,
        error: null,
      }));
    } catch (error) {
      set({ loading: false, error: error.message });
      throw error;
    }
  },
}));

export default useProductStore;