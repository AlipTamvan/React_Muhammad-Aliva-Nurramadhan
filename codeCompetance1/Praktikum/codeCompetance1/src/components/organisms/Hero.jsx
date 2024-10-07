import React, { useState, useEffect } from "react";
import heroImage from "../../assets/img/Hero.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Mengaktifkan animasi ketika komponen di-mount
  }, []);

  return (
    <div className="min-h-screen bg-dark-black bg-gradient-to-b from-black via-purple-900 lg:to-blue-900 md:to-black">
      <section className="bg flex flex-col-reverse lg:flex-row items-center justify-between py-16 container mx-auto px-6 lg:px-0">
        {/* Teks di bawah pada layar mobile, di samping pada layar besar */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl lg:text-7xl font-bold text-soft-white mb-4">
            Selamat Datang di Aliva Project
          </h1>
          <p className="text-large lg:text-xl text-soft-white mb-6">
            Kami menyediakan informasi dan layanan terkini untuk meningkatkan
            pengalaman Anda.
          </p>
          <a
            href="#"
            className="inline-block outline text-white px-3 py-1 md:px-6 md:py-3 text-lg font-semibold transition duration-300 hover:bg-blue-600"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>

        {/* Gambar di atas pada layar mobile, di samping pada layar besar */}
        <div className="flex w-full md:w-1/2 lg:w-1/2 mb-6 lg:mb-0">
          <img
            src={heroImage}
            alt="Hero"
            className={`w-full h-auto object-cover rounded-lg transition-all duration-1000 ease-in-out transform ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
