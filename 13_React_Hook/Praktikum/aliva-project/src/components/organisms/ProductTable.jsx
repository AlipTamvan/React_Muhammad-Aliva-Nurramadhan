import { useState } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import Swal from "sweetalert2";

export const ProductTable = ({ products, onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    Object.values(product).some((value) =>
      value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Handle delete with confirmation
  const handleDelete = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(product.id);
        Swal.fire("Deleted!", "Product has been deleted.", "success");
      }
    });
  };

  // Handle sorting
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  return (
    <div className="mt-8">
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full md:w-64"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                onClick={() => handleSort("id")}
                className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                No
              </th>
              <th
                onClick={() => handleSort("productName")}
                className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Product Name
              </th>
              <th
                onClick={() => handleSort("category")}
                className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Category
              </th>
              <th
                onClick={() => handleSort("freshness")}
                className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Freshness
              </th>
              <th
                onClick={() => handleSort("price")}
                className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedProducts.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">{product.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.productName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.freshness}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ${product.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => onEdit(product)}
                      className="bg-blue-500 hover:bg-blue-600"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(product)}
                      className="bg-red-500 hover:bg-red-600"
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-4 text-gray-500">No products found</div>
      )}
    </div>
  );
};
