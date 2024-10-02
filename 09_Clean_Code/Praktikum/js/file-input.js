// Mendeteksi Dan Menampilkan Nama File Yang Dipilih
const fileInput = document.getElementById("file-input");
const fileButton = document.getElementById("file-button");
const fileName = document.getElementById("file-name");

fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    const selectedFileName = fileInput.files[0].name;
    fileButton.textContent = selectedFileName;
  } else {
    fileButton.textContent = "Choose File";
  }
});
