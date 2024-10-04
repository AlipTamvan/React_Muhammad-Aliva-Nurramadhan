// Form Validation
const form = document.getElementById("product-form");

function clearError(input, errorElement) {
  input.classList.remove("border-red-500");
  errorElement.classList.add("hidden");
}

function showError(input, errorElement) {
  input.classList.add("border-red-500");
  errorElement.classList.remove("hidden");
}

// Melakukan Validasi Di Setiap Input
function validateForm() {
  let valid = true;
  resetErrorStates();

  // Validate product name
  const productName = document.getElementById("product-name");
  if (productName.value.trim() === "") {
    valid = false;
    showError(productName, document.getElementById("product-name-error"));
  }

  // Validate product category
  const productCategory = document.getElementById("product-category");
  if (productCategory.value === "") {
    valid = false;
    showError(
      productCategory,
      document.getElementById("product-category-error")
    );
  }

  // Validate file selection
  const fileInput = document.getElementById("file-input");
  if (!fileInput.files.length) {
    valid = false;
    document.getElementById("file-error").classList.remove("hidden");
  }

  // Validate product freshness
  const freshnessOptions = document.getElementsByName("freshness");
  const isFreshnessSelected = Array.from(freshnessOptions).some(
    (input) => input.checked
  );
  if (!isFreshnessSelected) {
    valid = false;
    document.getElementById("freshness-error").classList.remove("hidden");
  }

  // Validate additional description
  const description = document.getElementById("description");
  if (description.value.trim() === "") {
    valid = false;
    showError(description, document.getElementById("description-error"));
  }

  // Validate product price
  const productPrice = document.getElementById("product-price");
  if (productPrice.value.trim() === "") {
    valid = false;
    showError(productPrice, document.getElementById("product-price-error"));
  }

  return valid;
}

function resetErrorStates() {
  document
    .querySelectorAll(".border-red-500")
    .forEach((el) => el.classList.remove("border-red-500"));
  document
    .querySelectorAll(".hidden")
    .forEach((el) => el.classList.add("hidden"));
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validateForm()) {
    const name = document.getElementById("product-name").value;
    const category = document.getElementById("product-category").value;
    const image = document.getElementById("file-input").files[0]
      ? document.getElementById("file-input").files[0].name
      : "No image";
    const freshness = document.querySelector(
      'input[name="freshness"]:checked'
    ).value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("product-price").value;

    addProduct(name, category, image, freshness, description, price);
    Swal.fire({
      title: "Succeed!",
      text: "Product added successfully!",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        confirmButton:
          "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",
      },
    });

    // Reset form
    this.reset();
    fileButton.textContent = "Choose File";
  }
});
