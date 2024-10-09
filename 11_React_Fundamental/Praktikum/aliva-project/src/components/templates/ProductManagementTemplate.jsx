import { Header } from "../molecules/Header";
import { ProductForm } from "../organisms/ProductForm";

export const ProductManagementTemplate = () => (
  <div className="min-h-screen bg-gray-50">
    <Header />
    <main className="container mx-auto px-6 py-8 md:max-w-[936px]">
      <div className="flex justify-center mb-4">
        <div className="inline-block bg-purple-600 text-white text-3xl font-bold p-3 rounded-lg">
          B
        </div>
      </div>
      <h1 className="text-3xl font-medium mb-2 text-center font-roboto">
        Create Product
      </h1>
      <p className="text-gray-600 font-roboto font-light md:text-center">
        Below is an example form built entirely with Tailwind's form classes.
        Each required form group has a validation state that can be triggered by
        attempting to submit the form without completing it.
      </p>
      <ProductForm />
    </main>
  </div>
);
