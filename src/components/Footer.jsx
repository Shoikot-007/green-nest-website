import { FaInstagram, FaFacebook, FaPinterest, FaLeaf } from 'react-icons/fa'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className="bg-brown text-cream mt-20">
      <div className="container mx-auto px-4 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold mb-4 font-heading">
              <FaLeaf className="text-secondary" />
              <span>GreenNest</span>
            </div>
            <p className="text-cream opacity-90 font-body">
              Your trusted partner for indoor plants and expert care guidance. 
              Bringing nature into your home, one plant at a time.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 font-heading text-white">Quick Links</h3>
            <ul className="space-y-2 font-body">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/plants" className="hover:text-secondary transition-colors">
                  Plants
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 font-heading text-white">Follow Us</h3>
            <p className="text-cream opacity-90 mb-4 font-body">
              Stay connected for plant care tips and updates
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline border-cream text-cream hover:bg-secondary hover:border-secondary hover:text-white"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline border-cream text-cream hover:bg-secondary hover:border-secondary hover:text-white"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline border-cream text-cream hover:bg-secondary hover:border-secondary hover:text-white"
              >
                <FaPinterest size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream border-opacity-30 mt-8 pt-6 text-center">
          <p className="text-cream opacity-90 font-body">
            © 2025 GreenNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer