# Belajar React Hooks

Dalam proyek ini, kita mempelajari beberapa konsep penting dalam penggunaan React Hooks. React Hooks mempermudah pengelolaan state dan efek samping dalam komponen fungsi, menggantikan kebutuhan akan class components dengan cara yang lebih sederhana dan fleksibel.

## Poin Pembelajaran

### 1. State Management dengan `useState`

`useState` adalah salah satu hook dasar yang memungkinkan kita untuk menambahkan state lokal ke dalam komponen fungsi. Dengan menggunakan `useState`, kita dapat mengelola data yang berubah secara dinamis, seperti input dari pengguna, tanpa memerlukan class components. Hal ini memungkinkan pembuatan komponen yang lebih ringan dan responsif terhadap perubahan data.

### 2. Efek Samping dengan `useEffect`

`useEffect` adalah hook yang digunakan untuk menangani efek samping dalam komponen, seperti pengambilan data dari API, pengaturan timer, atau memodifikasi elemen DOM. Hook ini menggantikan lifecycle methods seperti `componentDidMount`, `componentDidUpdate`, dan `componentWillUnmount` dalam class components, dengan cara yang lebih mudah dan konsisten. Dengan `useEffect`, kita dapat mengontrol kapan efek harus dijalankan, misalnya pada render pertama atau saat ada perubahan tertentu pada state atau props.

### 3. Menggunakan Hooks Kustom

Selain hook bawaan seperti `useState` dan `useEffect`, kita juga dapat membuat hooks kustom. Hooks kustom memungkinkan kita untuk mengekstrak logika terkait state atau efek samping yang kompleks menjadi fungsi terpisah yang dapat digunakan ulang di berbagai komponen. Hal ini mempermudah pemeliharaan kode, membuatnya lebih modular, dan meminimalkan duplikasi logika di beberapa komponen.

Dengan hooks kustom, kita dapat membagi fungsionalitas yang sering digunakan, seperti pengambilan data, validasi input, atau logika lain yang berulang, sehingga membuat komponen lebih bersih dan fokus pada tampilan UI.
