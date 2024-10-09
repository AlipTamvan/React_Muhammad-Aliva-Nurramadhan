# Event Handling in React

## 1. Handling Events in Functional Components

Dalam komponen fungsional, event handler dapat ditentukan sebagai fungsi yang didefinisikan di dalam komponen itu sendiri. Dengan menggunakan hook seperti `useState`, pengguna dapat mengelola state terkait dengan event. Hal ini memungkinkan pengembangan komponen yang lebih modular dan mudah dipahami, serta memanfaatkan kemudahan fungsi-fungsi JavaScript modern.

## 2. Event Binding

Di React, event handler dapat diikat ke elemen dengan cara yang lebih sederhana. Event handler biasanya ditulis sebagai properti JSX (misalnya, `onClick`, `onChange`). Penting untuk diingat bahwa jika menggunakan metode kelas, perlu mengikat `this` untuk memastikan konteks yang benar. Ini dapat dilakukan dalam konstruktor atau dengan menggunakan sintaksis arrow function yang secara otomatis mengikat konteks.

## 3. Keyboard Events

Penanganan event keyboard di React memungkinkan pengguna untuk menangkap interaksi melalui keyboard. Event seperti `onKeyDown`, `onKeyPress`, dan `onKeyUp` dapat digunakan untuk mengelola perilaku pengguna saat berinteraksi dengan elemen. Ini bermanfaat dalam aplikasi yang memerlukan navigasi berbasis keyboard atau input khusus, sehingga meningkatkan aksesibilitas dan pengalaman pengguna.
