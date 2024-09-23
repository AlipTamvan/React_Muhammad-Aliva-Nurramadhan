// Soal Prioritas 2

// 1. Async-Await
async function fetchData(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        const data = { message: "Data fetched successfully!" };
        resolve(data);
      } else {
        reject("Error: Failed to fetch data.");
      }
    }, 2000);
  });
}

// Contoh penggunaan
async function getData() {
  console.log("=== Fetch Data ===");
  console.log("Fetching data...");
  try {
    const result = await fetchData();
    console.log(`✅ ${result.message}`);
  } catch (error) {
    console.log(`❌ ${error}`);
  }
}

// Mengambil data dengan berhasil
getData();

// 2. Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(
      `=== Person Introduction ===\nHello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person = new Person("Aliva", 20);
person.introduce(); // Output: Hello, my name is Aliva and I am 20 years old.
