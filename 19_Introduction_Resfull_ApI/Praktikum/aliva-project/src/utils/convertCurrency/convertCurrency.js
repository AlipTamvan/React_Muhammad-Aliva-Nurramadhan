// src/utils/convertCurrency/convertCurrency.js

export async function convertCurrency(amount, fromCurrency, toCurrency) {
  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    );
    const data = await response.json();
    const convertedAmount = amount * data.rates[toCurrency];
    console.log(convertedAmount);
    return convertedAmount; // Mengembalikan nilai yang dikonversi
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    throw error; // Melempar error jika terjadi kesalahan
  }
}

// Contoh Penggunaan
convertCurrency(100, "USD", "IDR").then((result) => console.log(result));
