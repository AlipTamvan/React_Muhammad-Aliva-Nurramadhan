import React from "react";
import avIcon from "../../assets/icons/AV-Icon.jpeg";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark-black text-white py-8 md:pt-16 lg:pt-32">
        <div className="container mx-auto p-8  lg:p-0 grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {/* <!-- Bagian Sosial Media --> */}
          <div className="flex flex-col items-start">
            <h2 className="font-montserrat text-3xl text-soft-white font-semibold mb-4">
              Get The Latest <br />
              Information From Aliva
            </h2>
            <div className="flex gap-3 justify-center md:flex-col lg:flex-row">
              <a
                href="https://www.facebook.com/aliva.nurramadhan"
                className="mb-2 text-soft-white px-4 py-1 rounded-full bg-dark-gray"
              >
                Facebook
              </a>
              <a
                href="https://github.com/AlipTamvan"
                className="mb-2 text-soft-white px-4 py-1 rounded-full bg-dark-gray"
              >
                Github
              </a>
              <a
                href="https://www.instagram.com/alivanurramadhan/"
                className="mb-2 text-soft-white px-4 py-1 rounded-full bg-dark-gray"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* <!-- Nama Website --> */}
          <div className="flex flex-col md:text-left">
            <h2 className="text-3xl font-semibold mb-4 text-soft-white">
              Aliva Project
            </h2>
            <p className="mb-2 font-thin">
              Aliva Project is dedicated to providing the latest information and
              services to enhance your experience.
            </p>
            <p className="text-soft-white">Terms of Service | Privacy Policy</p>
          </div>

          {/* <!-- Kontak (Nomor Telepon dan Alamat) --> */}
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-semibold mb-4 text-soft-white">
              Contact Me  
            </h2>
            <p className="mb-2 font-thin">Phone: +62 881 4766 367</p>
            <p className="mb-2 font-thin">Email: alivanurramadhan@gmail.com</p>
            <p className="font-thin">Pagutan Regency Phase 1 No. 26</p>
          </div>
        </div>
        <div className="mx-auto p-8 text-center mt-12">
          <p className="text-soft-white">
            Made with{" "}
            <span className="text-soft-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </span>{" "}
            by Aliva Nurramadhan
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
