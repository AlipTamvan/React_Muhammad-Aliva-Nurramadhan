import { Button } from "../atoms/Button";
import { Link } from "../atoms/Link";

export const Hero = () => (
  <main id="main-content" className="bg-[#37517e] py-20 md:py-40 px-5">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <section className="w-full md:w-1/2 mb-10 md:mb-0 ">
        <h2 className="text-3xl md:text-5xl font-bold mb-5 text-white text-center md:text-left">
          Better Solutions For Your Business
        </h2>
        <p className="text-lg md:text-xl text-white mb-8 text-center md:text-left">
          We are team of talented designers making websites with Bootstrap
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center">
          <Button
            onClick={() => (window.location.href = "createAccount.html")}
            className="bg-secondary hover:bg-blue-600 text-white mb-4 sm:mb-0 sm:mr-4"
          >
            Get Started
          </Button>
          <Link href="#" className="text-white hover:text-gray-300">
            Watch Video
          </Link>
        </div>
      </section>
      <section className="w-full md:w-1/2">
        <img
          src="https://www.ibsmeditech.id/technology/assets/img/header/header_4.png"
          alt="Illustration"
          className="w-full h-auto"
        />
      </section>
    </div>
  </main>
);
