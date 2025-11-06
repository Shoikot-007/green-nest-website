import { FaInstagram, FaFacebook, FaPinterest, FaLeaf } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="text-[#F9F8F4]">
      <div className="container mx-auto px-4 lg:px-20 py-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div
              className="flex items-center gap-2 text-2xl font-bold mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <FaLeaf className="text-[#6FBF73]" />
              <span className="text-[#3A7D44]">GreenNest</span>
            </div>
            <p
              className="text-[#2B2B2B] opacity-90"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Your trusted partner for indoor plants and expert care guidance.
              Bringing nature into your home, one plant at a time.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3
              className="text-xl font-semibold mb-4 text-[#3A7D44]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Quick Links
            </h3>
            <ul
              className="space-y-2 text-[#2B2B2B]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <li>
                <Link
                  to="/"
                  className="hover:text-[#6FBF73] transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/plants"
                  className="hover:text-[#6FBF73] transition-colors duration-300"
                >
                  Plants
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#6FBF73] transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#6FBF73] transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#6FBF73] transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3
              className="text-xl font-semibold mb-4 text-[#3A7D44]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Follow Us
            </h3>
            <p
              className="text-[#2B2B2B] opacity-90 mb-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Stay connected for plant care tips and updates
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle border-[#3A7D44] text-[#3A7D44] bg-transparent hover:bg-[#3A7D44] hover:border-[#3A7D44] hover:text-white transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle border-[#3A7D44] text-[#3A7D44] bg-transparent hover:bg-[#3A7D44] hover:border-[#3A7D44] hover:text-white transition-all duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle border-[#3A7D44] text-[#3A7D44] bg-transparent hover:bg-[#3A7D44] hover:border-[#3A7D44] hover:text-white transition-all duration-300"
              >
                <FaPinterest size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3A7D44] border-opacity-30 mt-8 pt-6 text-center">
          <p
            className="text-[#2B2B2B] opacity-90"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            © 2025 GreenNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;