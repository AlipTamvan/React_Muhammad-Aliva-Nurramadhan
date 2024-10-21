import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

const useProductStore = create(
  persist(
    (set) => ({
      products: [
        {
          id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
          productName: "John",
          productCategory: "Doe",
          productFreshness: "Doe",
          productPrice: "Doe",
          image: "Doe",
          additionalDescription: "Doe",
        },
      ],
      addProduct: (product) =>
        set((state) => ({
          products: [...state.products, { ...product, id: uuidv4() }],
        })),
      updateProduct: (updatedProduct) =>
        set((state) => ({
          products: state.products.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          ),
        })),
      deleteProduct: (id) =>
        set((state) => ({
          products: state.products.filter((product) => product.id !== id),
        })),
    }),
    {
      name: "product-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useProductStore;
