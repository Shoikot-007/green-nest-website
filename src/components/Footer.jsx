import { FaInstagram, FaFacebook, FaPinterest, FaLeaf } from 'react-icons/fa'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className="bg-[#8B5E3C] text-[#F9F8F4] mt-20">
      <div className="container mx-auto px-4 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <FaLeaf className="text-[#6FBF73]" />
              <span>GreenNest</span>
            </div>
            <p className="text-[#F9F8F4] opacity-90" style={{ fontFamily: 'Inter, sans-serif' }}>
              Your trusted partner for indoor plants and expert care guidance. 
              Bringing nature into your home, one plant at a time.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Quick Links</h3>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>
                <Link to="/" className="hover:text-[#6FBF73] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/plants" className="hover:text-[#6FBF73] transition-colors duration-300">
                  Plants
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#6FBF73] transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#6FBF73] transition-colors duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#6FBF73] transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Follow Us</h3>
            <p className="text-[#F9F8F4] opacity-90 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Stay connected for plant care tips and updates
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-circle border-[#F9F8F4] text-[#F9F8F4] bg-transparent hover:bg-[#6FBF73] hover:border-[#6FBF73] hover:text-white transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-circle border-[#F9F8F4] text-[#F9F8F4] bg-transparent hover:bg-[#6FBF73] hover:border-[#6FBF73] hover:text-white transition-all duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-circle border-[#F9F8F4] text-[#F9F8F4] bg-transparent hover:bg-[#6FBF73] hover:border-[#6FBF73] hover:text-white transition-all duration-300"
              >
                <FaPinterest size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#F9F8F4] border-opacity-30 mt-8 pt-6 text-center">
          <p className="text-[#F9F8F4] opacity-90" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2025 GreenNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer