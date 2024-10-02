//  Product Management

// Penamaan variabel dan fungsi mudah dipahami. Misalnya
let products = [];
let nextProductId = 1001;

function addProduct(name, category, image, freshness, description, price) {
  const product = {
    no: nextProductId++,
    name,
    category,
    image,
    freshness,
    description,
    price,
  };
  products.push(product);
  updateProductList();
}
// Nama variabel seperti products, addProduct, dan nextProductId menggambarkan maksudnya dengan jelas.


function updateProductList(filteredProducts = products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  if (filteredProducts.length === 0) {
    const noProductRow = document.createElement("tr");
    noProductRow.innerHTML = `<td colspan="7" class="text-center py-4 text-gray-500">No products found</td>`;
    productList.appendChild(noProductRow);
  } else {
    filteredProducts.forEach((product) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td class="border border-gray-300 px-4 py-2">${product.no}</td>
          <td class="border border-gray-300 px-4 py-2">${product.name}</td>
          <td class="border border-gray-300 px-4 py-2">${product.category}</td>
          <td class="border border-gray-300 px-4 py-2">${product.image}</td>
          <td class="border border-gray-300 px-4 py-2">${product.freshness}</td>
          <td class="border border-gray-300 px-4 py-2">${product.description}</td>
          <td class="border border-gray-300 px-4 py-2">$${product.price}</td>
        `;
      productList.appendChild(row);
    });
  }
}
