import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";
import { Hero } from "../organisms/Hero";
import { Newsletter } from "../organisms/Newletter";

export const LandingPageTemplate = () => {
  return (
    <>
      <Header />
      <Hero />
      <Newsletter />
      <Footer />
    </>
  );
};
