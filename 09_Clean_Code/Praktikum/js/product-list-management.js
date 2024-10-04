//  Product List Management

document.getElementById("delete-btn").addEventListener("click", function () {
  if (products.length > 0) {
    products.pop();
    updateProductList();
  }
});

document.getElementById("search-btn").addEventListener("click", function () {
  const searchTerm = document
    .getElementById("search-input")
    .value.toLowerCase();
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm)
  );

  if (filteredProducts.length === 0) {
    Swal.fire({
      icon: "warning",
      title: "No products found",
      text: `No products match your search for "${searchTerm}"`,
    });
  }

  updateProductList(filteredProducts);
});
