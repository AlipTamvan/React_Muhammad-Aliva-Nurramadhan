import { Link } from "../atoms/Link";
import { SocialIcon } from "../molecules/SocialIcon";

export const Footer = () => (
  <>
    <section className="bg-white py-16 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xl font-semibold text-primary mb-4">ARSHA</h4>
          <p className="text-gray-600 mb-4">
            A108 Adam Street
            <br />
            New York, NY 535022
            <br />
            United States
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> +1 5589 55488 55
            <br />
            <strong>Email:</strong> info@example.com
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-primary mb-4">
            {" "}
            Useful Links
          </h4>

          <ul className="space-y-2">
            {[
              "Home",
              "About us",
              "Services",
              "Terms of service",
              "Privacy policy",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="text-gray-600">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-primary mb-4">
            Our Services
          </h4>

          <ul className="space-y-2">
            {[
              "Web Design",
              "Web Development",
              "Product Management",
              "Marketing",
              "Graphic Design",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="text-gray-600">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-primary mb-4">
            Our Social Networks
          </h4>

          <p className="text-gray-600 mb-4">
            Cras fermentum odio eu feugiat lide par naso tierra videa magna
            derita valies
          </p>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <SocialIcon key={i} href="#" />
            ))}
          </div>
        </div>
      </div>
    </section>
    <footer className="bg-[#37517e] text-white py-8 px-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">
          &copy; Copyright <strong>Arsha</strong>. All Rights Reserved
        </p>
        <p>
          Designed by
          <Link
            href="https://bootstrapmade.com"
            className="text-secondary hover:text-blue-300"
          >
            BootstrapMade
          </Link>
        </p>
      </div>
    </footer>
  </>
);
